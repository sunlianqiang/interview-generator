import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faCloudUploadAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
  uploadedFile: File | null;
}

const FileUpload = ({ onFileUpload, uploadedFile }: FileUploadProps) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('请上传PDF格式的文件');
        return;
      }
      if (file.size > 20 * 1024 * 1024) {
        alert('文件大小不能超过20MB');
        return;
      }
      onFileUpload(file);
    }
    setIsDragOver(false);
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxSize: 20 * 1024 * 1024,
    multiple: false,
    onDragEnter: () => setIsDragOver(true),
    onDragLeave: () => setIsDragOver(false)
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FontAwesomeIcon icon={faFilePdf} className="text-2xl text-indigo-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">上传简历</h3>
        <p className="text-gray-600">支持PDF格式，最大20MB</p>
      </div>
      
      <div 
        {...getRootProps()} 
        className={`upload-area rounded-lg p-8 text-center cursor-pointer ${
          isDragActive || isDragOver ? 'dragover' : ''
        }`}
      >
        <input {...getInputProps()} />
        <FontAwesomeIcon icon={faCloudUploadAlt} className="text-4xl text-gray-400 mb-4" />
        <p className="text-gray-600 mb-2">
          {isDragActive ? '松开鼠标上传文件' : '点击上传或拖拽文件到这里'}
        </p>
        <p className="text-sm text-gray-500">仅支持PDF格式，最大20MB</p>
      </div>
      
      {uploadedFile && (
        <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
            <span className="text-green-700 font-medium">简历上传成功</span>
          </div>
          <p className="text-sm text-green-600 mt-1">{uploadedFile.name}</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;