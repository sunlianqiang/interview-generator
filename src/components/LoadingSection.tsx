import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

interface LoadingSectionProps {
  isVisible: boolean;
  onComplete: () => void;
}

const LoadingSection = ({ isVisible, onComplete }: LoadingSectionProps) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { text: '正在分析简历内容...', duration: 2000 },
    { text: '正在解析职位要求...', duration: 1500 },
    { text: '正在生成面试题目...', duration: 3000 },
    { text: '正在优化题目质量...', duration: 1500 },
    { text: '生成完成！', duration: 500 }
  ];

  useEffect(() => {
    if (!isVisible) {
      setProgress(0);
      setCurrentStep(0);
      return;
    }

    let totalDuration = 0;
    let currentDuration = 0;
    
    const runSteps = async () => {
      for (let i = 0; i < steps.length; i++) {
        setCurrentStep(i);
        const stepDuration = steps[i].duration;
        const stepProgress = (currentDuration / (totalDuration || 8500)) * 100;
        
        // 模拟进度条动画
        const interval = setInterval(() => {
          setProgress(prev => {
            const newProgress = stepProgress + ((currentDuration + Date.now() % stepDuration) / (totalDuration || 8500)) * 100;
            return Math.min(newProgress, (currentDuration + stepDuration) / (totalDuration || 8500) * 100);
          });
        }, 50);
        
        await new Promise(resolve => setTimeout(resolve, stepDuration));
        clearInterval(interval);
        currentDuration += stepDuration;
      }
      
      setProgress(100);
      setTimeout(() => {
        onComplete();
      }, 500);
    };
    
    // 计算总时长
    totalDuration = steps.reduce((sum, step) => sum + step.duration, 0);
    runSteps();
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
      <div className="mb-6">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FontAwesomeIcon 
            icon={currentStep === steps.length - 1 ? faCheckCircle : faCog} 
            className={`text-2xl ${
              currentStep === steps.length - 1 ? 'text-green-500' : 'text-blue-500 animate-spin'
            }`} 
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {currentStep === steps.length - 1 ? '生成完成' : 'AI正在生成面试题'}
        </h3>
        <p className="text-gray-600">{steps[currentStep]?.text}</p>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className="text-sm text-gray-500">
        {Math.round(progress)}% 完成
      </p>
      
      {currentStep === steps.length - 1 && (
        <div className="mt-4 text-green-600 font-medium">
          ✨ 已为您生成个性化面试题库
        </div>
      )}
    </div>
  );
};

export default LoadingSection;