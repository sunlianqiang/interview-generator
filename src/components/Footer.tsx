import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <h3 className="text-xl font-bold">面试助手</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              基于AI技术的智能面试准备平台，帮助求职者提升面试成功率，实现职业目标。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  产品特性
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  使用指南
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  常见问题
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  联系我们
                </a>
              </li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">联系我们</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 mr-3" />
                <span className="text-gray-400">support@interview-ai.com</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-gray-400 mr-3" />
                <span className="text-gray-400">+86 400-123-4567</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400 mr-3" />
                <span className="text-gray-400">北京市朝阳区</span>
              </div>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 面试助手. 保留所有权利. | 
            <a href="#" className="hover:text-white transition-colors ml-1">
              隐私政策
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">
              服务条款
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;