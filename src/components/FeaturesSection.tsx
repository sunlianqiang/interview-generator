import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faUserCheck, faChartLine } from '@fortawesome/free-solid-svg-icons';

const FeaturesSection = () => {
  const features = [
    {
      icon: faBrain,
      title: 'AI智能分析',
      description: '深度分析简历内容和职位要求，生成高度匹配的面试题目',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    {
      icon: faUserCheck,
      title: '个性化定制',
      description: '根据个人技能和经验水平，量身定制不同难度的面试题',
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    },
    {
      icon: faChartLine,
      title: '提升成功率',
      description: '系统性的面试准备，显著提高面试通过率和表现水平',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            为什么选择我们？
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            利用先进的AI技术，为您提供最专业、最个性化的面试准备方案
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center card-hover">
              <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <FontAwesomeIcon icon={feature.icon} className={`text-2xl ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;