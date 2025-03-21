// import React, { useState, useEffect } from 'react';

// const BatchProcessingCalculator = () => {
//   // Input fields with initial empty values
//   const [inputs, setInputs] = useState({
//     batchSize: '',
//     fileSize: '',
//     fileSizeUnit: 'MB',
//     executionTime: '',
//     executionTimeUnit: 'seconds',
//     recordsPerSecond: '',
//     timePerRecord: '',
//     timePerRecordUnit: 'milliseconds'
//   });

//   // Which model to use for calculations
//   const [model, setModel] = useState('run2');
  
//   // Tracking which fields were manually entered vs. calculated
//   const [enteredFields, setEnteredFields] = useState([]);
  
//   // Track calculation output messages
//   const [outputMessage, setOutputMessage] = useState('');
  
//   // Track if we're dealing with a very large batch size
//   const [isLargeBatch, setIsLargeBatch] = useState(false);

//   // Constants derived from our runs
//   const constants = {
//     run1: {
//       fileSizeSlope: 0.24673, // KB per record
//       fileSizeIntercept: 59.22, // KB
//       timePerRecordConstant: 9850, // ms × batch size
//       maxProcessingSpeed: 12217.02, // records/second at optimal batch size
//       optimalBatchSize: 50000 // batch size with best performance
//     },
//     run2: {
//       fileSizeSlope: 0.24814, // KB per record
//       fileSizeIntercept: -33.65, // KB
//       timePerRecordConstant: 6640, // ms × batch size
//       maxProcessingSpeed: 25075.23, // records/second at optimal batch size
//       optimalBatchSize: 250000 // batch size with best performance
//     }
//   };

//   // Unit conversion multipliers (all relative to KB for file size and ms for time)
//   const fileSizeMultipliers = {
//     KB: 1,
//     MB: 1024,
//     GB: 1024 * 1024,
//     TB: 1024 * 1024 * 1024
//   };
  
//   const timeMultipliers = {
//     milliseconds: 1,
//     seconds: 1000,
//     minutes: 60 * 1000,
//     hours: 3600 * 1000
//   };

//   // Handle input changes
//   const handleInputChange = (field, value) => {
//     // Update the input value
//     const newInputs = { ...inputs, [field]: value };
//     setInputs(newInputs);
    
//     // Track if batch size is large
//     if (field === 'batchSize' && value) {
//       const batchSize = parseFloat(value);
//       setIsLargeBatch(batchSize > 1000000);
//     }
    
//     // Track which fields the user has manually entered
//     if (value && !enteredFields.includes(field)) {
//       setEnteredFields([...enteredFields, field]);
//     } else if (!value && enteredFields.includes(field)) {
//       setEnteredFields(enteredFields.filter(f => f !== field));
//     }
//   };
  
//   // Handle unit change for file size
//   const handleFileSizeUnitChange = (unit) => {
//     const currentValue = inputs.fileSize;
//     if (!currentValue || isNaN(parseFloat(currentValue))) {
//       setInputs({ ...inputs, fileSizeUnit: unit });
//       return;
//     }

//     const currentUnit = inputs.fileSizeUnit;
    
//     // Convert to KB first (base unit)
//     const valueInKB = parseFloat(currentValue) * fileSizeMultipliers[currentUnit];
    
//     // Then convert from KB to the new unit
//     const newValue = valueInKB / fileSizeMultipliers[unit];
    
//     // Determine appropriate precision based on the unit
//     let precision;
//     if (unit === 'KB') precision = 2;
//     else if (unit === 'MB') precision = 3;
//     else if (unit === 'GB') precision = 6;
//     else precision = 9; // TB
    
//     setInputs({
//       ...inputs,
//       fileSizeUnit: unit,
//       fileSize: newValue.toFixed(precision)
//     });
//   };
  
//   // Handle unit change for execution time
//   const handleExecutionTimeUnitChange = (unit) => {
//     const currentValue = inputs.executionTime;
//     if (!currentValue || isNaN(parseFloat(currentValue))) {
//       setInputs({ ...inputs, executionTimeUnit: unit });
//       return;
//     }

//     const currentUnit = inputs.executionTimeUnit;
    
//     // Convert to milliseconds first (base unit)
//     const valueInMs = parseFloat(currentValue) * timeMultipliers[currentUnit];
    
//     // Then convert from ms to the new unit
//     const newValue = valueInMs / timeMultipliers[unit];
    
//     // Determine appropriate precision
//     let precision = 2;
//     if (unit === 'milliseconds') precision = 2;
//     else if (unit === 'seconds') precision = 2;
//     else if (unit === 'minutes') precision = 4;
//     else precision = 6; // hours
    
//     setInputs({
//       ...inputs,
//       executionTimeUnit: unit,
//       executionTime: newValue.toFixed(precision)
//     });
//   };
  
//   // Handle unit change for time per record
//   const handleTimePerRecordUnitChange = (unit) => {
//     const currentValue = inputs.timePerRecord;
//     if (!currentValue || isNaN(parseFloat(currentValue))) {
//       setInputs({ ...inputs, timePerRecordUnit: unit });
//       return;
//     }

//     const currentUnit = inputs.timePerRecordUnit;
    
//     // Convert to milliseconds first (base unit)
//     const valueInMs = parseFloat(currentValue) * timeMultipliers[currentUnit];
    
//     // Then convert from ms to the new unit
//     const newValue = valueInMs / timeMultipliers[unit];
    
//     // For time per record, we often deal with very small values
//     const precision = unit === 'milliseconds' ? 6 : 9; // More precision for seconds
    
//     setInputs({
//       ...inputs,
//       timePerRecordUnit: unit,
//       timePerRecord: newValue.toFixed(precision)
//     });
//   };
  
//   // Handle model change
//   const handleModelChange = (newModel) => {
//     setModel(newModel);
//     setOutputMessage(`Using ${newModel === 'run1' ? 'Run 1' : 'Run 2'} model for calculations`);
//   };
  
//   // Clear all inputs
//   const handleClear = () => {
//     setInputs({
//       batchSize: '',
//       fileSize: '',
//       fileSizeUnit: 'MB',
//       executionTime: '',
//       executionTimeUnit: 'seconds',
//       recordsPerSecond: '',
//       timePerRecord: '',
//       timePerRecordUnit: 'milliseconds'
//     });
//     setEnteredFields([]);
//     setOutputMessage('All values cleared');
//     setIsLargeBatch(false);
//   };
  
//   // Format number with appropriate precision and scientific notation for very large/small values
//   const formatNumber = (value, precision = 2) => {
//     if (value === null || value === undefined || isNaN(value)) return '';
    
//     const absValue = Math.abs(value);
    
//     if (absValue === 0) return '0';
//     if (absValue < 0.0000001) return value.toExponential(precision);
//     if (absValue < 0.001) return value.toFixed(precision + 4);
//     if (absValue < 1) return value.toFixed(precision + 2);
//     if (absValue < 1000) return value.toFixed(precision);
//     if (absValue >= 1000000000) return value.toExponential(precision);
//     return value.toLocaleString(undefined, { maximumFractionDigits: precision });
//   };
  
//   // Calculate execution time based on batch size, using real-world scaling
//   const calculateScaledExecutionTime = (batchSize) => {
//     const { maxProcessingSpeed, optimalBatchSize } = constants[model];
    
//     // For very large batch sizes, use the observed maximum processing speed
//     // This accounts for the flattening of the performance curve at scale
//     if (batchSize > optimalBatchSize) {
//       // Convert directly using the maximum observed processing speed
//       return (batchSize / maxProcessingSpeed) * 1000; // in milliseconds
//     } else {
//       // For smaller batch sizes, use the formula based on timePerRecordConstant
//       const timePerRecord = constants[model].timePerRecordConstant / batchSize;
//       return batchSize * timePerRecord; // in milliseconds
//     }
//   };
  
//   // Perform calculations
//   const calculateValues = () => {
//     if (enteredFields.length === 0) {
//       setOutputMessage('Please enter at least one value to calculate');
//       return;
//     }

//     const newInputs = { ...inputs };
//     const { fileSizeSlope, fileSizeIntercept, timePerRecordConstant, maxProcessingSpeed } = constants[model];
//     let calculatedFields = [];
    
//     // Get parsed values in base units (KB for file size, ms for time)
//     const getBatchSize = () => {
//       return inputs.batchSize ? parseFloat(inputs.batchSize) : null;
//     };
    
//     const getFileSizeKB = () => {
//       if (!inputs.fileSize) return null;
//       return parseFloat(inputs.fileSize) * fileSizeMultipliers[inputs.fileSizeUnit];
//     };
    
//     const getExecutionTimeMs = () => {
//       if (!inputs.executionTime) return null;
//       return parseFloat(inputs.executionTime) * timeMultipliers[inputs.executionTimeUnit];
//     };
    
//     const getTimePerRecordMs = () => {
//       if (!inputs.timePerRecord) return null;
//       return parseFloat(inputs.timePerRecord) * timeMultipliers[inputs.timePerRecordUnit];
//     };
    
//     // Set file size in the current unit
//     const setFileSize = (sizeKB) => {
//       const unit = inputs.fileSizeUnit;
//       const convertedValue = sizeKB / fileSizeMultipliers[unit];
      
//       // Determine appropriate precision based on unit
//       let precision;
//       if (unit === 'KB') precision = 2;
//       else if (unit === 'MB') precision = 3;
//       else if (unit === 'GB') precision = 6;
//       else precision = 9; // TB
      
//       newInputs.fileSize = formatNumber(convertedValue, precision);
//       calculatedFields.push('fileSize');
//     };
    
//     // Set execution time in the current unit
//     const setExecutionTime = (timeMs) => {
//       const unit = inputs.executionTimeUnit;
//       const convertedValue = timeMs / timeMultipliers[unit];
      
//       // Determine appropriate precision
//       let precision;
//       if (unit === 'milliseconds') precision = 2;
//       else if (unit === 'seconds') precision = 2;
//       else if (unit === 'minutes') precision = 4;
//       else precision = 6; // hours
      
//       newInputs.executionTime = formatNumber(convertedValue, precision);
//       calculatedFields.push('executionTime');
//     };
    
//     // Set time per record in the current unit
//     const setTimePerRecord = (timeMs) => {
//       const unit = inputs.timePerRecordUnit;
//       const convertedValue = timeMs / timeMultipliers[unit];
      
//       // For time per record, we often deal with very small values
//       const precision = unit === 'milliseconds' ? 6 : 9; // More precision for seconds
      
//       newInputs.timePerRecord = formatNumber(convertedValue, precision);
//       calculatedFields.push('timePerRecord');
//     };
    
//     // Set records per second
//     const setRecordsPerSecond = (speed) => {
//       newInputs.recordsPerSecond = formatNumber(speed, 2);
//       calculatedFields.push('recordsPerSecond');
//     };
    
//     // Calculate based on batch size
//     const batchSize = getBatchSize();
    
//     // Update large batch flag
//     if (batchSize) {
//       setIsLargeBatch(batchSize > 1000000);
//     }
    
//     // Calculate file size from batch size
//     if (batchSize !== null && !enteredFields.includes('fileSize')) {
//       const fileSizeKB = fileSizeSlope * batchSize + fileSizeIntercept;
//       if (fileSizeKB > 0) {
//         setFileSize(fileSizeKB);
//       }
//     }
    
//     // Calculate batch size from file size
//     if (enteredFields.includes('fileSize') && !enteredFields.includes('batchSize')) {
//       const fileSizeKB = getFileSizeKB();
//       if (fileSizeKB !== null) {
//         const batchSize = Math.round((fileSizeKB - fileSizeIntercept) / fileSizeSlope);
//         if (batchSize > 0) {
//           newInputs.batchSize = formatNumber(batchSize, 0);
//           calculatedFields.push('batchSize');
          
//           // Update large batch flag based on calculated batch size
//           setIsLargeBatch(batchSize > 1000000);
//         }
//       }
//     }
    
//     // Calculate time per record from batch size
//     if ((batchSize !== null || calculatedFields.includes('batchSize')) && 
//         !enteredFields.includes('timePerRecord')) {
//       const batchSizeValue = batchSize !== null ? batchSize : parseFloat(newInputs.batchSize);
//       if (batchSizeValue > 0) {
//         // For very large batches, calculate based on max observed speed
//         let timePerRecordMs;
        
//         if (batchSizeValue > constants[model].optimalBatchSize) {
//           // Use the maximum observed processing speed
//           timePerRecordMs = 1000 / maxProcessingSpeed; // Convert from records/sec to ms/record
//         } else {
//           // Use the formula for smaller batch sizes
//           timePerRecordMs = timePerRecordConstant / batchSizeValue;
//         }
        
//         setTimePerRecord(timePerRecordMs);
//       }
//     }
    
//     // Calculate records per second from time per record
//     if ((enteredFields.includes('timePerRecord') || calculatedFields.includes('timePerRecord')) && 
//         !enteredFields.includes('recordsPerSecond')) {
//       const timePerRecordMs = enteredFields.includes('timePerRecord') 
//         ? getTimePerRecordMs() 
//         : parseFloat(newInputs.timePerRecord) * timeMultipliers[inputs.timePerRecordUnit];
      
//       if (timePerRecordMs > 0) {
//         const recordsPerSecond = 1000 / timePerRecordMs;
//         setRecordsPerSecond(recordsPerSecond);
//       }
//     }
    
//     // Calculate execution time based on batch size
//     if (batchSize !== null && !enteredFields.includes('executionTime')) {
//       // If time per record is known, use that for calculation
//       if (enteredFields.includes('timePerRecord')) {
//         const timePerRecordMs = getTimePerRecordMs();
//         if (timePerRecordMs > 0) {
//           const executionTimeMs = batchSize * timePerRecordMs;
//           setExecutionTime(executionTimeMs);
//         }
//       } 
//       // If records per second is known, use that
//       else if (enteredFields.includes('recordsPerSecond')) {
//         const recordsPerSecond = parseFloat(inputs.recordsPerSecond);
//         if (recordsPerSecond > 0) {
//           const executionTimeMs = (batchSize / recordsPerSecond) * 1000;
//           setExecutionTime(executionTimeMs);
//         }
//       }
//       // Otherwise use our scaled execution time calculation
//       else {
//         const executionTimeMs = calculateScaledExecutionTime(batchSize);
//         setExecutionTime(executionTimeMs);
        
//         // Also calculate and set time per record
//         if (!enteredFields.includes('timePerRecord') && !calculatedFields.includes('timePerRecord')) {
//           const timePerRecordMs = executionTimeMs / batchSize;
//           setTimePerRecord(timePerRecordMs);
//         }
        
//         // Also calculate and set records per second
//         if (!enteredFields.includes('recordsPerSecond') && !calculatedFields.includes('recordsPerSecond')) {
//           const recordsPerSecond = (batchSize / executionTimeMs) * 1000;
//           setRecordsPerSecond(recordsPerSecond);
//         }
//       }
//     }
    
//     // If we have batch size and execution time, calculate time per record and records per second
//     if (batchSize !== null && enteredFields.includes('executionTime') && 
//         !enteredFields.includes('timePerRecord') && !enteredFields.includes('recordsPerSecond')) {
//       const executionTimeMs = getExecutionTimeMs();
//       if (executionTimeMs > 0) {
//         const timePerRecordMs = executionTimeMs / batchSize;
//         const recordsPerSecond = (batchSize / executionTimeMs) * 1000;
        
//         setTimePerRecord(timePerRecordMs);
//         setRecordsPerSecond(recordsPerSecond);
//       }
//     }
    
//     // Update inputs with calculated values
//     setInputs(newInputs);
    
//     // Update message
//     if (calculatedFields.length > 0) {
//       setOutputMessage(`Calculated: ${calculatedFields.join(', ')}`);
//     } else {
//       setOutputMessage('No additional values could be calculated');
//     }
//   };

//   // Determine if a field was manually entered
//   const isEntered = (field) => enteredFields.includes(field);
  
//   // Get display classes based on whether field was manually entered
//   const getInputClasses = (field) => {
//     return `w-full p-2 border rounded-l ${isEntered(field) ? 'border-blue-500' : 'border-gray-300'}`;
//   };
  
//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Enhanced Batch Processing Calculator</h2>
//       <p className="text-gray-600 mb-6">
//         Enter any known values, click "Calculate", and the calculator will compute the remaining metrics using the selected model.
//       </p>
      
//       <div className="mb-6 flex items-center space-x-4">
//         <div className="font-medium">Model:</div>
//         <div className="flex space-x-2">
//           <button
//             onClick={() => handleModelChange('run1')}
//             className={`px-3 py-1 rounded ${model === 'run1' 
//               ? 'bg-blue-600 text-white' 
//               : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
//           >
//             Run 1
//           </button>
//           <button
//             onClick={() => handleModelChange('run2')}
//             className={`px-3 py-1 rounded ${model === 'run2' 
//               ? 'bg-blue-600 text-white' 
//               : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
//           >
//             Run 2 (Recommended)
//           </button>
//         </div>
        
//         <div className="ml-auto">
//           <button
//             onClick={handleClear}
//             className="px-4 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
//           >
//             Clear All
//           </button>
//         </div>
//       </div>
      
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Batch Size (records)
//               </label>
//               <input
//                 type="text"
//                 value={inputs.batchSize}
//                 onChange={(e) => handleInputChange('batchSize', e.target.value)}
//                 className={`w-full p-2 border rounded ${isEntered('batchSize') ? 'border-blue-500' : 'border-gray-300'}`}
//                 placeholder="Enter batch size"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 File Size
//               </label>
//               <div className="flex">
//                 <input
//                   type="text"
//                   value={inputs.fileSize}
//                   onChange={(e) => handleInputChange('fileSize', e.target.value)}
//                   className={getInputClasses('fileSize')}
//                   placeholder="Enter file size"
//                 />
//                 <select
//                   value={inputs.fileSizeUnit}
//                   onChange={(e) => handleFileSizeUnitChange(e.target.value)}
//                   className="p-2 border border-l-0 rounded-r border-gray-300 bg-gray-50"
//                 >
//                   <option value="KB">KB</option>
//                   <option value="MB">MB</option>
//                   <option value="GB">GB</option>
//                   <option value="TB">TB</option>
//                 </select>
//               </div>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Execution Time
//               </label>
//               <div className="flex">
//                 <input
//                   type="text"
//                   value={inputs.executionTime}
//                   onChange={(e) => handleInputChange('executionTime', e.target.value)}
//                   className={getInputClasses('executionTime')}
//                   placeholder="Enter execution time"
//                 />
//                 <select
//                   value={inputs.executionTimeUnit}
//                   onChange={(e) => handleExecutionTimeUnitChange(e.target.value)}
//                   className="p-2 border border-l-0 rounded-r border-gray-300 bg-gray-50"
//                 >
//                   <option value="milliseconds">milliseconds</option>
//                   <option value="seconds">seconds</option>
//                   <option value="minutes">minutes</option>
//                   <option value="hours">hours</option>
//                 </select>
//               </div>
//             </div>
//           </div>
          
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Processing Speed (records/second)
//               </label>
//               <input
//                 type="text"
//                 value={inputs.recordsPerSecond}
//                 onChange={(e) => handleInputChange('recordsPerSecond', e.target.value)}
//                 className={`w-full p-2 border rounded ${isEntered('recordsPerSecond') ? 'border-blue-500' : 'border-gray-300'}`}
//                 placeholder="Enter records per second"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Time per Record
//               </label>
//               <div className="flex">
//                 <input
//                   type="text"
//                   value={inputs.timePerRecord}
//                   onChange={(e) => handleInputChange('timePerRecord', e.target.value)}
//                   className={getInputClasses('timePerRecord')}
//                   placeholder="Enter time per record"
//                 />
//                 <select
//                   value={inputs.timePerRecordUnit}
//                   onChange={(e) => handleTimePerRecordUnitChange(e.target.value)}
//                   className="p-2 border border-l-0 rounded-r border-gray-300 bg-gray-50"
//                 >
//                   <option value="milliseconds">milliseconds</option>
//                   <option value="seconds">seconds</option>
//                 </select>
//               </div>
//             </div>
            
//             <div className="flex items-center h-full pt-4">
//               <div className="text-sm text-gray-500">
//                 <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-1"></span> 
//                 Blue borders indicate manually entered values
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {isLargeBatch && (
//           <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
//             <strong>Note:</strong> For large batch sizes (over 1 million records), the calculator uses observed maximum 
//             processing speeds rather than theoretical projections. Run 2 model has a maximum observed speed of 
//             ~25,075 records/second, which is used to calculate realistic execution times for very large batches.
//           </div>
//         )}
        
//         <div className="mt-6 flex items-center justify-between">
//           <button
//             onClick={calculateValues}
//             className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium"
//           >
//             Calculate
//           </button>
          
//           {outputMessage && (
//             <div className={`px-4 py-2 rounded text-sm ${
//               outputMessage.includes('error') 
//                 ? 'bg-red-100 text-red-700' 
//                 : 'bg-green-100 text-green-700'
//             }`}>
//               {outputMessage}
//             </div>
//           )}
//         </div>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         <div className="bg-white p-5 rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-3">Performance Characteristics</h3>
//           <div className="text-sm space-y-2">
//             <p><strong>Run 1:</strong></p>
//             <ul className="list-disc pl-5">
//               <li>Optimal batch size: 50,000 records</li>
//               <li>Maximum speed: 12,217 records/second</li>
//               <li>Performance degrades above 50,000 records</li>
//             </ul>
//             <p className="mt-2"><strong>Run 2:</strong></p>
//             <ul className="list-disc pl-5">
//               <li>Optimal batch size: 250,000 records</li>
//               <li>Maximum speed: 25,075 records/second</li>
//               <li>Better scaling for large batches</li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="bg-white p-5 rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-3">Large-Scale Processing</h3>
//           <div className="space-y-2 text-sm">
//             <p>For very large batch sizes (1M+ records):</p>
//             <ul className="list-disc pl-5 space-y-1">
//               <li>File sizes scale linearly and remain accurate</li>
//               <li>Execution time is calculated using the maximum observed processing speed</li>
//               <li>Run 2 processes ~25,075 records/second at scale</li>
//               <li>For 900M records, expect ~10 hours processing time</li>
//             </ul>
//           </div>
//         </div>
//       </div>
      
//       <div className="bg-gray-50 p-6 rounded-lg shadow">
//         <h3 className="text-xl font-semibold mb-4">Model Equations</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <h4 className="font-medium text-lg text-gray-800 mb-2">Run 1 Model</h4>
//             <div className="space-y-2">
//               <div className="p-2 bg-white rounded border">
//                 <p className="font-medium">File Size:</p>
//                 <p className="font-mono mt-1">Size(KB) = 0.24673 × BatchSize + 59.22</p>
//               </div>
//               <div className="p-2 bg-white rounded border">
//                 <p className="font-medium">Time per Record (small batches):</p>
//                 <p className="font-mono mt-1">Time(ms) ≈ 9850 / BatchSize</p>
//               </div>
//               <div className="p-2 bg-white rounded border">
//                 <p className="font-medium">Large Batch Processing:</p>
//                 <p className="font-mono mt-1">ExecutionTime(ms) ≈ BatchSize / 12.217</p>
//               </div>
//             </div>
//           </div>
          
//           <div>
//             <h4 className="font-medium text-lg text-gray-800 mb-2">Run 2 Model (Recommended)</h4>
//             <div className="space-y-2">
//               <div className="p-2 bg-white rounded border">
//                 <p className="font-medium">File Size:</p>
//                 <p className="font-mono mt-1">Size(KB) = 0.24814 × BatchSize - 33.65</p>
//               </div>
//               <div className="p-2 bg-white rounded border">
//                 <p className="font-medium">Time per Record (small batches):</p>
//                 <p className="font-mono mt-1">Time(ms) ≈ 6640 / BatchSize</p>
//               </div>
//               <div className="p-2 bg-white rounded border">
//                 <p className="font-medium">Large Batch Processing:</p>
//                 <p className="font-mono mt-1">ExecutionTime(ms) ≈ BatchSize / 25.075</p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-100">
//           <h4 className="font-medium text-blue-800 mb-2">Key Performance Relationships</h4>
//           <ul className="list-disc pl-6 space-y-1">
//             <li>Records/Second = 1000 / Time per Record (ms)</li>
//             <li>Execution Time (ms) = Batch Size × Time per Record (ms)</li>
//             <li>For very large batches: Execution Time (s) = Batch Size / Maximum Records per Second</li>
//             <li>File Size scaling is linear with batch size</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BatchProcessingCalculator;





















import React, { useState, useEffect } from 'react';

const BatchProcessingCalculator = () => {
    // Input fields
    const [inputs, setInputs] = useState({
        batchSize: '',
        fileSize: '',
        fileSizeUnit: 'MB',
        executionTime: '',
        executionTimeUnit: 'seconds',
        recordsPerSecond: '',
        timePerRecord: '',
        timePerRecordUnit: 'milliseconds'
    });

    // Tracking which fields were manually entered vs. calculated
    const [enteredFields, setEnteredFields] = useState([]);

    // Track calculation output messages
    const [outputMessage, setOutputMessage] = useState('');

    // Track if we're dealing with a very large batch size
    const [isLargeBatch, setIsLargeBatch] = useState(false);

    // UNIT CONVERSION FACTORS
    const fileSizeMultipliers = { KB: 1, MB: 1024, GB: 1024 * 1024, TB: 1024 * 1024 * 1024 };
    const timeMultipliers = { milliseconds: 1, seconds: 1000, minutes: 60 * 1000, hours: 3600 * 1000 };

    // ----- BEST FIT MODEL (COMBINED) -----
    //  Derive constants from BOTH runs.  This is where we combine the data.
    //  A more robust solution would use proper statistical regression, but this will do for now.
    const combinedConstants = {
        // File size scaling (using average slope and intercept)
        fileSizeSlope: (0.24673 + 0.24814) / 2,    // Average KB per record across both runs
        fileSizeIntercept: (59.22 - 33.65) / 2,  // Average intercept

        // Time per record (using an average constant)
        // Averaging constants might not be perfect, but avoids needing to pick a run.
        // A proper regression across BOTH runs would be best.
        timePerRecordConstant: (9850 + 6640) / 2,

        // Maximum processing speed (using the higher value - representing potential)
        //  The "best" speed is the faster one, representing the most optimized outcome.
        maxProcessingSpeed: Math.max(12217.02, 25075.23),

        //  Optimal batch size:  pick the *larger* of the two, as that represents the
        //  scenario where the system can scale most effectively.
        optimalBatchSize: Math.max(50000, 250000)
    };

    // ----- INPUT HANDLING -----

    const handleInputChange = (field, value) => {
        const newInputs = { ...inputs, [field]: value };
        setInputs(newInputs);

        if (field === 'batchSize' && value) {
            setIsLargeBatch(parseFloat(value) > 1000000);
        }

        if (value && !enteredFields.includes(field)) {
            setEnteredFields([...enteredFields, field]);
        } else if (!value && enteredFields.includes(field)) {
            setEnteredFields(enteredFields.filter(f => f !== field));
        }
    };

    const handleFileSizeUnitChange = (unit) => {
        const currentValue = inputs.fileSize;
        if (!currentValue || isNaN(parseFloat(currentValue))) {
            setInputs({ ...inputs, fileSizeUnit: unit });
            return;
        }

        const currentUnit = inputs.fileSizeUnit;
        const valueInKB = parseFloat(currentValue) * fileSizeMultipliers[currentUnit];
        const newValue = valueInKB / fileSizeMultipliers[unit];

        let precision;
        if (unit === 'KB') precision = 2;
        else if (unit === 'MB') precision = 3;
        else if (unit === 'GB') precision = 6;
        else precision = 9;

        setInputs({ ...inputs, fileSizeUnit: unit, fileSize: newValue.toFixed(precision) });
    };

    const handleExecutionTimeUnitChange = (unit) => {
        const currentValue = inputs.executionTime;
        if (!currentValue || isNaN(parseFloat(currentValue))) {
            setInputs({ ...inputs, executionTimeUnit: unit });
            return;
        }

        const currentUnit = inputs.executionTimeUnit;
        const valueInMs = parseFloat(currentValue) * timeMultipliers[currentUnit];
        const newValue = valueInMs / timeMultipliers[unit];

        let precision;
        if (unit === 'milliseconds') precision = 2;
        else if (unit === 'seconds') precision = 2;
        else if (unit === 'minutes') precision = 4;
        else precision = 6;

        setInputs({ ...inputs, executionTimeUnit: unit, executionTime: newValue.toFixed(precision) });
    };

    const handleTimePerRecordUnitChange = (unit) => {
        const currentValue = inputs.timePerRecord;
        if (!currentValue || isNaN(parseFloat(currentValue))) {
            setInputs({ ...inputs, timePerRecordUnit: unit });
            return;
        }

        const currentUnit = inputs.timePerRecordUnit;
        const valueInMs = parseFloat(currentValue) * timeMultipliers[currentUnit];
        const newValue = valueInMs / timeMultipliers[unit];

        const precision = unit === 'milliseconds' ? 6 : 9;

        setInputs({ ...inputs, timePerRecordUnit: unit, timePerRecord: newValue.toFixed(precision) });
    };

    const handleClear = () => {
        setInputs({
            batchSize: '',
            fileSize: '',
            fileSizeUnit: 'MB',
            executionTime: '',
            executionTimeUnit: 'seconds',
            recordsPerSecond: '',
            timePerRecord: '',
            timePerRecordUnit: 'milliseconds'
        });
        setEnteredFields([]);
        setOutputMessage('All values cleared');
        setIsLargeBatch(false);
    };

    // ----- UTILITY FUNCTIONS -----

    const formatNumber = (value, precision = 2) => {
        if (value === null || value === undefined || isNaN(value)) return '';

        const absValue = Math.abs(value);

        if (absValue === 0) return '0';
        if (absValue < 0.0000001) return value.toExponential(precision);
        if (absValue < 0.001) return value.toFixed(precision + 4);
        if (absValue < 1) return value.toFixed(precision + 2);
        if (absValue < 1000) return value.toFixed(precision);
        if (absValue >= 1000000000) return value.toExponential(precision);
        return value.toLocaleString(undefined, { maximumFractionDigits: precision });
    };

    // ----- CALCULATION FUNCTIONS -----

    const calculateScaledExecutionTime = (batchSize) => {
        const { maxProcessingSpeed, optimalBatchSize } = combinedConstants;

        if (batchSize > optimalBatchSize) {
            return (batchSize / maxProcessingSpeed) * 1000; // milliseconds
        } else {
            const timePerRecord = combinedConstants.timePerRecordConstant / batchSize;
            return batchSize * timePerRecord; // milliseconds
        }
    };

    const calculateValues = () => {
        if (enteredFields.length === 0) {
            setOutputMessage('Please enter at least one value to calculate');
            return;
        }

        const newInputs = { ...inputs };
        const { fileSizeSlope, fileSizeIntercept, timePerRecordConstant, maxProcessingSpeed } = combinedConstants;
        let calculatedFields = [];

        const getBatchSize = () => inputs.batchSize ? parseFloat(inputs.batchSize) : null;
        const getFileSizeKB = () => inputs.fileSize ? parseFloat(inputs.fileSize) * fileSizeMultipliers[inputs.fileSizeUnit] : null;
        const getExecutionTimeMs = () => inputs.executionTime ? parseFloat(inputs.executionTime) * timeMultipliers[inputs.executionTimeUnit] : null;
        const getTimePerRecordMs = () => inputs.timePerRecord ? parseFloat(inputs.timePerRecord) * timeMultipliers[inputs.timePerRecordUnit] : null;

        const setFileSize = (sizeKB) => {
            const unit = inputs.fileSizeUnit;
            const convertedValue = sizeKB / fileSizeMultipliers[unit];
            let precision;
            if (unit === 'KB') precision = 2;
            else if (unit === 'MB') precision = 3;
            else if (unit === 'GB') precision = 6;
            else precision = 9;
            newInputs.fileSize = formatNumber(convertedValue, precision);
            calculatedFields.push('fileSize');
        };

        const setExecutionTime = (timeMs) => {
            const unit = inputs.executionTimeUnit;
            const convertedValue = timeMs / timeMultipliers[unit];
            let precision;
            if (unit === 'milliseconds') precision = 2;
            else if (unit === 'seconds') precision = 2;
            else if (unit === 'minutes') precision = 4;
            else precision = 6;
            newInputs.executionTime = formatNumber(convertedValue, precision);
            calculatedFields.push('executionTime');
        };

        const setTimePerRecord = (timeMs) => {
            const unit = inputs.timePerRecordUnit;
            const convertedValue = timeMs / timeMultipliers[unit];
            const precision = unit === 'milliseconds' ? 6 : 9;
            newInputs.timePerRecord = formatNumber(convertedValue, precision);
            calculatedFields.push('timePerRecord');
        };

        const setRecordsPerSecond = (speed) => {
            newInputs.recordsPerSecond = formatNumber(speed, 2);
            calculatedFields.push('recordsPerSecond');
        };

        const batchSize = getBatchSize();

        if (batchSize) {
            setIsLargeBatch(batchSize > 1000000);
        }

        if (batchSize !== null && !enteredFields.includes('fileSize')) {
            const fileSizeKB = fileSizeSlope * batchSize + fileSizeIntercept;
            if (fileSizeKB > 0) {
                setFileSize(fileSizeKB);
            }
        }

        if (enteredFields.includes('fileSize') && !enteredFields.includes('batchSize')) {
            const fileSizeKB = getFileSizeKB();
            if (fileSizeKB !== null) {
                const batchSize = Math.round((fileSizeKB - fileSizeIntercept) / fileSizeSlope);
                if (batchSize > 0) {
                    newInputs.batchSize = formatNumber(batchSize, 0);
                    calculatedFields.push('batchSize');
                    setIsLargeBatch(batchSize > 1000000);
                }
            }
        }

        if ((batchSize !== null || calculatedFields.includes('batchSize')) && !enteredFields.includes('timePerRecord')) {
            const batchSizeValue = batchSize !== null ? batchSize : parseFloat(newInputs.batchSize);
            if (batchSizeValue > 0) {
                let timePerRecordMs;

                if (batchSizeValue > combinedConstants.optimalBatchSize) {
                    timePerRecordMs = 1000 / maxProcessingSpeed;
                } else {
                    timePerRecordMs = timePerRecordConstant / batchSizeValue;
                }

                setTimePerRecord(timePerRecordMs);
            }
        }

        if ((enteredFields.includes('timePerRecord') || calculatedFields.includes('timePerRecord')) && !enteredFields.includes('recordsPerSecond')) {
            const timePerRecordMs = enteredFields.includes('timePerRecord')
                ? getTimePerRecordMs()
                : parseFloat(newInputs.timePerRecord) * timeMultipliers[inputs.timePerRecordUnit];

            if (timePerRecordMs > 0) {
                const recordsPerSecond = 1000 / timePerRecordMs;
                setRecordsPerSecond(recordsPerSecond);
            }
        }

        if (batchSize !== null && !enteredFields.includes('executionTime')) {
            if (enteredFields.includes('timePerRecord')) {
                const timePerRecordMs = getTimePerRecordMs();
                if (timePerRecordMs > 0) {
                    const executionTimeMs = batchSize * timePerRecordMs;
                    setExecutionTime(executionTimeMs);
                }
            } else if (enteredFields.includes('recordsPerSecond')) {
                const recordsPerSecond = parseFloat(inputs.recordsPerSecond);
                if (recordsPerSecond > 0) {
                    const executionTimeMs = (batchSize / recordsPerSecond) * 1000;
                    setExecutionTime(executionTimeMs);
                }
            } else {
                const executionTimeMs = calculateScaledExecutionTime(batchSize);
                setExecutionTime(executionTimeMs);

                if (!enteredFields.includes('timePerRecord') && !calculatedFields.includes('timePerRecord')) {
                    const timePerRecordMs = executionTimeMs / batchSize;
                    setTimePerRecord(timePerRecordMs);
                }

                if (!enteredFields.includes('recordsPerSecond') && !calculatedFields.includes('recordsPerSecond')) {
                    const recordsPerSecond = (batchSize / executionTimeMs) * 1000;
                    setRecordsPerSecond(recordsPerSecond);
                }
            }
        }

        if (batchSize !== null && enteredFields.includes('executionTime') &&
            !enteredFields.includes('timePerRecord') && !enteredFields.includes('recordsPerSecond')) {
            const executionTimeMs = getExecutionTimeMs();
            if (executionTimeMs > 0) {
                const timePerRecordMs = executionTimeMs / batchSize;
                const recordsPerSecond = (batchSize / executionTimeMs) * 1000;

                setTimePerRecord(timePerRecordMs);
                setRecordsPerSecond(recordsPerSecond);
            }
        }

        setInputs(newInputs);

        if (calculatedFields.length > 0) {
            setOutputMessage(`Calculated: ${calculatedFields.join(', ')}`);
        } else {
            setOutputMessage('No additional values could be calculated');
        }
    };

    // ----- UI HELPER FUNCTIONS -----

    const isEntered = (field) => enteredFields.includes(field);

    const getInputClasses = (field) => `w-full p-2 border rounded-l ${isEntered(field) ? 'border-blue-500' : 'border-gray-300'}`;

    // ----- RENDER -----

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Enhanced Batch Processing Calculator</h2>
            <p className="text-gray-600 mb-6">
                Enter any known values, click "Calculate", and the calculator will compute the remaining metrics using a combined model.
            </p>

            <div className="mb-6 flex items-center justify-end">
                <button
                    onClick={handleClear}
                    className="px-4 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                >
                    Clear All
                </button>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Batch Size (records)
                            </label>
                            <input
                                type="text"
                                value={inputs.batchSize}
                                onChange={(e) => handleInputChange('batchSize', e.target.value)}
                                className={`w-full p-2 border rounded ${isEntered('batchSize') ? 'border-blue-500' : 'border-gray-300'}`}
                                placeholder="Enter batch size"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                File Size
                            </label>
                            <div className="flex">
                                <input
                                    type="text"
                                    value={inputs.fileSize}
                                    onChange={(e) => handleInputChange('fileSize', e.target.value)}
                                    className={getInputClasses('fileSize')}
                                    placeholder="Enter file size"
                                />
                                <select
                                    value={inputs.fileSizeUnit}
                                    onChange={(e) => handleFileSizeUnitChange(e.target.value)}
                                    className="p-2 border border-l-0 rounded-r border-gray-300 bg-gray-50"
                                >
                                    <option value="KB">KB</option>
                                    <option value="MB">MB</option>
                                    <option value="GB">GB</option>
                                    <option value="TB">TB</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Execution Time
                            </label>
                            <div className="flex">
                                <input
                                    type="text"
                                    value={inputs.executionTime}
                                    onChange={(e) => handleInputChange('executionTime', e.target.value)}
                                    className={getInputClasses('executionTime')}
                                    placeholder="Enter execution time"
                                />
                                <select
                                    value={inputs.executionTimeUnit}
                                    onChange={(e) => handleExecutionTimeUnitChange(e.target.value)}
                                    className="p-2 border border-l-0 rounded-r border-gray-300 bg-gray-50"
                                >
                                    <option value="milliseconds">milliseconds</option>
                                    <option value="seconds">seconds</option>
                                    <option value="minutes">minutes</option>
                                    <option value="hours">hours</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Processing Speed (records/second)
                            </label>
                            <input
                                type="text"
                                value={inputs.recordsPerSecond}
                                onChange={(e) => handleInputChange('recordsPerSecond', e.target.value)}
                                className={`w-full p-2 border rounded ${isEntered('recordsPerSecond') ? 'border-blue-500' : 'border-gray-300'}`}
                                placeholder="Enter records per second"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Time per Record
                            </label>
                            <div className="flex">
                                <input
                                    type="text"
                                    value={inputs.timePerRecord}
                                    onChange={(e) => handleInputChange('timePerRecord', e.target.value)}
                                    className={getInputClasses('timePerRecord')}
                                    placeholder="Enter time per record"
                                />
                                <select
                                    value={inputs.timePerRecordUnit}
                                    onChange={(e) => handleTimePerRecordUnitChange(e.target.value)}
                                    className="p-2 border border-l-0 rounded-r border-gray-300 bg-gray-50"
                                >
                                    <option value="milliseconds">milliseconds</option>
                                    <option value="seconds">seconds</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center h-full pt-4">
                            <div className="text-sm text-gray-500">
                                <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-1"></span>
                                Blue borders indicate manually entered values
                            </div>
                        </div>
                    </div>
                </div>

                {isLargeBatch && (
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                        <strong>Note:</strong> For large batch sizes (over 1 million records), the calculator uses the observed maximum
                        processing speed across both runs rather than theoretical projections. The maximum observed speed is
                        ~{combinedConstants.maxProcessingSpeed.toLocaleString()} records/second, which is used to calculate realistic execution times.
                    </div>
                )}

                <div className="mt-6 flex items-center justify-between">
                    <button
                        onClick={calculateValues}
                        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium"
                    >
                        Calculate
                    </button>

                    {outputMessage && (
                        <div className={`px-4 py-2 rounded text-sm ${outputMessage.includes('error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                            }`}>
                            {outputMessage}
                        </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-5 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-3">Performance Characteristics</h3>
                    <div className="text-sm space-y-2">
                        <p><strong>Combined Model:</strong></p>
                        <ul className="list-disc pl-5">
                            <li>Optimal batch size: {combinedConstants.optimalBatchSize.toLocaleString()} records (larger of the two runs)</li>
                            <li>Maximum speed: {combinedConstants.maxProcessingSpeed.toLocaleString()} records/second (faster of the two runs)</li>
                            <li>Uses averaged values for scaling and file size estimation</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-3">Large-Scale Processing</h3>
                    <div className="space-y-2 text-sm">
                        <p>For very large batch sizes (1M+ records):</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>File sizes scale linearly and remain accurate</li>
                            <li>Execution time is calculated using the maximum observed processing speed</li>
                            <li>Processes ~{combinedConstants.maxProcessingSpeed.toLocaleString()} records/second at scale</li>
                            <li>For 900M records, expect ~{formatNumber((900000000 / combinedConstants.maxProcessingSpeed) / 3600, 1)} hours processing time</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Model Equations</h3>
                <div className="space-y-2">
                    <div className="p-2 bg-white rounded border">
                        <p className="font-medium">File Size:</p>
                        <p className="font-mono mt-1">Size(KB) = {combinedConstants.fileSizeSlope.toFixed(5)} × BatchSize + {combinedConstants.fileSizeIntercept.toFixed(2)}</p>
                    </div>
                    <div className="p-2 bg-white rounded border">
                        <p className="font-medium">Time per Record (small batches):</p>
                        <p className="font-mono mt-1">Time(ms) ≈ {combinedConstants.timePerRecordConstant.toFixed(1)} / BatchSize</p>
                    </div>
                    <div className="p-2 bg-white rounded border">
                        <p className="font-medium">Large Batch Processing:</p>
                        <p className="font-mono mt-1">ExecutionTime(ms) ≈ BatchSize / {combinedConstants.maxProcessingSpeed.toFixed(3)}</p>
                    </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-2">Key Performance Relationships</h4>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Records/Second = 1000 / Time per Record (ms)</li>
                        <li>Execution Time (ms) = Batch Size × Time per Record (ms)</li>
                        <li>For very large batches: Execution Time (s) = Batch Size / Maximum Records per Second</li>
                        <li>File Size scaling is linear with batch size</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BatchProcessingCalculator;




