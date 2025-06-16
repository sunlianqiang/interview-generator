import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLightbulb } from '@fortawesome/free-solid-svg-icons';

interface JobRequirementsProps {
  onJobRequirementsChange: (requirements: string) => void;
  jobRequirements: string;
}

const JobRequirements = ({ onJobRequirementsChange, jobRequirements }: JobRequirementsProps) => {
  const [showTips, setShowTips] = useState(false);

  const sampleRequirements = [
    "3年以上前端开发经验，熟练掌握React、Vue等框架",
    "具备良好的JavaScript基础，了解ES6+新特性",
    "熟悉Node.js后端开发，有全栈开发经验优先",
    "具备产品思维，能够独立完成项目开发"
  ];

  const handleSampleClick = (sample: string) => {
    const newRequirements = jobRequirements ? `${jobRequirements}\n${sample}` : sample;
    onJobRequirementsChange(newRequirements);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FontAwesomeIcon icon={faBriefcase} className="text-2xl text-purple-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">职位要求</h3>
        <p className="text-gray-600">详细描述目标职位的技能要求和工作内容</p>
      </div>
      
      <div className="space-y-4">
        <textarea
          value={jobRequirements}
          onChange={(e) => onJobRequirementsChange(e.target.value)}
          placeholder="请输入职位要求，例如：\n- 3年以上前端开发经验\n- 熟练掌握React、Vue等框架\n- 具备良好的JavaScript基础\n- 了解后端开发优先"
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
        />
        
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setShowTips(!showTips)}
            className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center"
          >
            <FontAwesomeIcon icon={faLightbulb} className="mr-1" />
            {showTips ? '隐藏' : '显示'}示例要求
          </button>
          <span className="text-sm text-gray-500">
            {jobRequirements.length}/1000 字符
          </span>
        </div>
        
        {showTips && (
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <h4 className="text-sm font-medium text-purple-800 mb-2">示例职位要求：</h4>
            <div className="space-y-2">
              {sampleRequirements.map((sample, index) => (
                <button
                  key={index}
                  onClick={() => handleSampleClick(sample)}
                  className="block w-full text-left text-sm text-purple-700 hover:text-purple-900 hover:bg-purple-100 p-2 rounded transition-colors"
                >
                  • {sample}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobRequirements;