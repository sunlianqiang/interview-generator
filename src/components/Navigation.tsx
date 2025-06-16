import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <FontAwesomeIcon icon={faBrain} className="text-2xl text-indigo-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">智能面试题生成器</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700 transition-colors">
              <FontAwesomeIcon icon={faQuestionCircle} className="mr-1" />
              <span className="ml-1">帮助</span>
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              登录
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;