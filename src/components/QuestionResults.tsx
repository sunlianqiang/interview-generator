import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEye, 
  faEyeSlash, 
  faHeart, 
  faShare, 
  faDownload, 
  faRedo, 
  faPlus,
  faStar,
  faFilter
} from '@fortawesome/free-solid-svg-icons';

export interface Question {
  id: number;
  question: string;
  answer: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  isFavorite?: boolean;
}

interface QuestionResultsProps {
  questions: Question[];
  isVisible: boolean;
  onExport: () => void;
  onRegenerate: () => void;
  onNewSession: () => void;
}

const QuestionResults = ({ 
  questions, 
  isVisible, 
  onExport, 
  onRegenerate, 
  onNewSession 
}: QuestionResultsProps) => {
  const [visibleAnswers, setVisibleAnswers] = useState<Set<number>>(new Set());
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const toggleAnswer = (id: number) => {
    const newVisible = new Set(visibleAnswers);
    if (newVisible.has(id)) {
      newVisible.delete(id);
    } else {
      newVisible.add(id);
    }
    setVisibleAnswers(newVisible);
  };

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '简单';
      case 'medium': return '中等';
      case 'hard': return '困难';
      default: return '未知';
    }
  };

  const categories = Array.from(new Set(questions.map(q => q.category)));
  
  const filteredQuestions = questions.filter(q => {
    const categoryMatch = selectedCategory === 'all' || q.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  if (!isVisible) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">生成的面试题</h3>
          <p className="text-gray-600">共生成 {questions.length} 道题目</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
          <button 
            onClick={onExport}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            导出题库
          </button>
          <button 
            onClick={onRegenerate}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FontAwesomeIcon icon={faRedo} className="mr-2" />
            重新生成
          </button>
          <button 
            onClick={onNewSession}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            新建会话
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faFilter} className="text-gray-500" />
          <span className="text-sm font-medium text-gray-700">筛选：</span>
        </div>
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-1 border border-gray-300 rounded-md text-sm"
        >
          <option value="all">所有类别</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select 
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="px-3 py-1 border border-gray-300 rounded-md text-sm"
        >
          <option value="all">所有难度</option>
          <option value="easy">简单</option>
          <option value="medium">中等</option>
          <option value="hard">困难</option>
        </select>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.map((question, index) => (
          <div key={question.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {question.category}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(question.difficulty)}`}>
                    {getDifficultyText(question.difficulty)}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {question.question}
                </h4>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={() => toggleFavorite(question.id)}
                  className={`p-2 rounded-full transition-colors ${
                    favorites.has(question.id) 
                      ? 'text-red-500 hover:text-red-600' 
                      : 'text-gray-400 hover:text-red-500'
                  }`}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                  <FontAwesomeIcon icon={faShare} />
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <button
                onClick={() => toggleAnswer(question.id)}
                className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
              >
                <FontAwesomeIcon 
                  icon={visibleAnswers.has(question.id) ? faEyeSlash : faEye} 
                  className="mr-2" 
                />
                {visibleAnswers.has(question.id) ? '隐藏答案' : '查看答案'}
              </button>
              
              {favorites.has(question.id) && (
                <div className="flex items-center text-red-500">
                  <FontAwesomeIcon icon={faStar} className="mr-1" />
                  <span className="text-sm">已收藏</span>
                </div>
              )}
            </div>
            
            {visibleAnswers.has(question.id) && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-500">
                <h5 className="font-medium text-gray-900 mb-2">参考答案：</h5>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {question.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {filteredQuestions.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>没有找到符合条件的题目</p>
        </div>
      )}
    </div>
  );
};

export default QuestionResults;