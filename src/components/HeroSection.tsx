import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

interface HeroSectionProps {
  onScrollToUpload: () => void;
}

const HeroSection = ({ onScrollToUpload }: HeroSectionProps) => {
  return (
    <section className="gradient-bg text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          智能面试题生成器
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          上传简历和职位要求，让AI为您生成个性化的面试题库
        </p>
        <button 
          onClick={onScrollToUpload}
          className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
        >
          <FontAwesomeIcon icon={faRocket} className="mr-2" />
          开始生成面试题
        </button>
      </div>
    </section>
  );
};

export default HeroSection;