'use client';

import { useState, useRef } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FileUpload from '@/components/FileUpload';
import JobRequirements from '@/components/JobRequirements';
import LoadingSection from '@/components/LoadingSection';
import QuestionResults, { Question } from '@/components/QuestionResults';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

// 模拟数据
const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "请介绍一下React的生命周期方法，以及在函数组件中如何实现类似的功能？",
    answer: "React类组件的生命周期包括挂载、更新、卸载三个阶段。主要方法有componentDidMount、componentDidUpdate、componentWillUnmount等。在函数组件中，我们使用useEffect Hook来实现类似功能：useEffect(() => {}, [])相当于componentDidMount，useEffect(() => {})相当于componentDidUpdate，useEffect(() => { return () => {} }, [])中的返回函数相当于componentWillUnmount。",
    category: "前端技术",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "解释一下JavaScript中的闭包概念，并举例说明其应用场景。",
    answer: "闭包是指函数能够访问其外部作用域中变量的特性，即使外部函数已经执行完毕。闭包的应用场景包括：1. 数据私有化和封装；2. 模块化开发；3. 回调函数；4. 防抖和节流；5. 柯里化函数。例如：function outer() { let count = 0; return function inner() { return ++count; }; } const counter = outer(); console.log(counter()); // 1",
    category: "JavaScript基础",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "什么是RESTful API？请说明其设计原则。",
    answer: "RESTful API是基于REST架构风格设计的Web API。主要原则包括：1. 无状态性：每个请求都包含处理该请求所需的所有信息；2. 统一接口：使用标准HTTP方法（GET、POST、PUT、DELETE）；3. 资源标识：通过URI唯一标识资源；4. 资源表现：支持多种数据格式（JSON、XML等）；5. 分层系统：支持负载均衡、缓存等中间层；6. 按需代码：可选的代码下载功能。",
    category: "后端开发",
    difficulty: "easy"
  },
  {
    id: 4,
    question: "描述一下你在项目中是如何进行性能优化的？",
    answer: "性能优化可以从多个维度进行：1. 前端优化：代码分割、懒加载、图片优化、CDN使用、缓存策略；2. 网络优化：减少HTTP请求、启用Gzip压缩、使用HTTP/2；3. 渲染优化：虚拟滚动、防抖节流、避免重排重绘；4. 打包优化：Tree Shaking、代码压缩、资源合并；5. 监控分析：使用性能监控工具，分析关键指标如FCP、LCP、CLS等。",
    category: "项目经验",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "如何处理前端应用中的错误边界和异常处理？",
    answer: "前端错误处理策略：1. React错误边界：使用componentDidCatch或ErrorBoundary组件捕获组件树中的错误；2. 全局错误处理：监听window.onerror和unhandledrejection事件；3. 异步错误：使用try-catch包装async/await，Promise.catch处理rejected状态；4. 网络错误：axios拦截器统一处理HTTP错误；5. 用户友好：显示友好的错误提示，提供重试机制；6. 错误上报：集成Sentry等工具进行错误监控和分析。",
    category: "前端技术",
    difficulty: "hard"
  }
];

export default function Home() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [jobRequirements, setJobRequirements] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  
  const uploadSectionRef = useRef<HTMLDivElement>(null);
  const resultsSectionRef = useRef<HTMLDivElement>(null);

  const scrollToUpload = () => {
    uploadSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToResults = () => {
    resultsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
  };

  const handleJobRequirementsChange = (requirements: string) => {
    setJobRequirements(requirements);
  };

  const handleGenerate = () => {
    if (!uploadedFile || !jobRequirements.trim()) {
      alert('请先上传简历并填写职位要求');
      return;
    }
    
    setIsLoading(true);
    setShowResults(false);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setQuestions(sampleQuestions);
    setShowResults(true);
    setTimeout(() => {
      scrollToResults();
    }, 100);
  };

  const handleExport = () => {
    // 模拟导出功能
    const dataStr = JSON.stringify(questions, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'interview-questions.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleRegenerate = () => {
    setShowResults(false);
    handleGenerate();
  };

  const handleNewSession = () => {
    setUploadedFile(null);
    setJobRequirements('');
    setIsLoading(false);
    setShowResults(false);
    setQuestions([]);
    scrollToUpload();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <HeroSection onScrollToUpload={scrollToUpload} />
      
      <section ref={uploadSectionRef} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              开始生成您的面试题库
            </h2>
            <p className="text-xl text-gray-600">
              只需两步，即可获得个性化的面试题目
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <FileUpload 
              onFileUpload={handleFileUpload}
              uploadedFile={uploadedFile}
            />
            <JobRequirements 
              onJobRequirementsChange={handleJobRequirementsChange}
              jobRequirements={jobRequirements}
            />
          </div>
          
          <div className="text-center">
            <button
              onClick={handleGenerate}
              disabled={!uploadedFile || !jobRequirements.trim() || isLoading}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isLoading ? '生成中...' : '生成面试题'}
            </button>
          </div>
        </div>
      </section>
      
      {isLoading && (
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <LoadingSection 
              isVisible={isLoading}
              onComplete={handleLoadingComplete}
            />
          </div>
        </section>
      )}
      
      {showResults && (
        <section ref={resultsSectionRef} className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <QuestionResults 
              questions={questions}
              isVisible={showResults}
              onExport={handleExport}
              onRegenerate={handleRegenerate}
              onNewSession={handleNewSession}
            />
          </div>
        </section>
      )}
      
      <FeaturesSection />
      
      <Footer />
    </div>
  );
}