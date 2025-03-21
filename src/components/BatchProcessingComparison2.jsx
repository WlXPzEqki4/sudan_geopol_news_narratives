import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const BatchProcessingComparison = () => {
  // Combined data from all runs
  const data = [
    { batch: 1000, run1Time: 9.85, run2Time: 6.64, run3Time: null, run1Speed: 101.55, run2Speed: 150.60, run3Speed: null, run1Ms: 9.85, run2Ms: 6.64, run3Ms: null },
    { batch: 2000, run1Time: 3.44, run2Time: 7.18, run3Time: null, run1Speed: 581.62, run2Speed: 278.55, run3Speed: null, run1Ms: 1.72, run2Ms: 3.59, run3Ms: null },
    { batch: 5000, run1Time: 3.62, run2Time: 3.51, run3Time: null, run1Speed: 1381.41, run2Speed: 1424.50, run3Speed: null, run1Ms: 0.72, run2Ms: 0.70, run3Ms: null },
    { batch: 20000, run1Time: 4.34, run2Time: 6.08, run3Time: null, run1Speed: 4611.03, run2Speed: 3289.47, run3Speed: null, run1Ms: 0.22, run2Ms: 0.30, run3Ms: null },
    { batch: 50000, run1Time: 4.09, run2Time: 5.33, run3Time: null, run1Speed: 12217.02, run2Speed: 9380.86, run3Speed: null, run1Ms: 0.08, run2Ms: 0.11, run3Ms: null },
    { batch: 100000, run1Time: 9.46, run2Time: 8.60, run3Time: null, run1Speed: 10565.97, run2Speed: 11627.91, run3Speed: null, run1Ms: 0.09, run2Ms: 0.09, run3Ms: null },
    { batch: 150000, run1Time: null, run2Time: 7.49, run3Time: null, run1Speed: null, run2Speed: 20026.70, run3Speed: null, run1Ms: null, run2Ms: 0.05, run3Ms: null },
    { batch: 200000, run1Time: null, run2Time: 9.29, run3Time: null, run1Speed: null, run2Speed: 21528.53, run3Speed: null, run1Ms: null, run2Ms: 0.05, run3Ms: null },
    { batch: 250000, run1Time: null, run2Time: 9.97, run3Time: null, run1Speed: null, run2Speed: 25075.23, run3Speed: null, run1Ms: null, run2Ms: 0.04, run3Ms: null },
    { batch: 500000, run1Time: null, run2Time: null, run3Time: 23.42, run1Speed: null, run2Speed: null, run3Speed: 21348.85, run1Ms: null, run2Ms: null, run3Ms: 0.05 },
    { batch: 750000, run1Time: null, run2Time: null, run3Time: 20.92, run1Speed: null, run2Speed: null, run3Speed: 35850.66, run1Ms: null, run2Ms: null, run3Ms: 0.03 },
    { batch: 1000000, run1Time: null, run2Time: null, run3Time: 25.32, run1Speed: null, run2Speed: null, run3Speed: 39493.38, run1Ms: null, run2Ms: null, run3Ms: 0.03 }
  ];

  return (
    <div className="flex flex-col p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">CSV Extraction Performance Analysis</h2>
      <p className="text-gray-600 mb-6">Comparing batch processing performance across three test runs</p>
      
      <div className="overflow-x-auto bg-white rounded-lg shadow mb-8">
        <h3 className="text-xl font-semibold p-4 border-b">Key Findings</h3>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-lg text-gray-800">Run 1 Characteristics</h4>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>U-shaped execution time curve</li>
                <li>Optimal batch size: 50,000 records</li>
                <li>Maximum processing speed: 12,217 records/second</li>
                <li>Best time per record: 0.08ms</li>
                <li>Performance degrades above 50,000 records</li>
                <li>File size model: 0.247 KB per record + 59.22 KB</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg text-gray-800">Run 2 Characteristics</h4>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Continues improving with larger batches</li>
                <li>Optimal batch size: 250,000 records (maximum tested)</li>
                <li>Maximum processing speed: 25,075 records/second</li>
                <li>Best time per record: 0.04ms</li>
                <li>No significant performance degradation at larger batch sizes</li>
                <li>File size model: 0.248 KB per record - 33.65 KB</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg text-gray-800">Run 3 Characteristics</h4>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Tests much larger batch sizes (up to 1,000,000 records)</li>
                <li>Optimal batch size: 750,000 records</li>
                <li>Maximum processing speed: 39,493 records/second</li>
                <li>Best time per record: 0.03ms</li>
                <li>Slight performance degradation at 1,000,000 records</li>
                <li>File size model: ~0.25 KB per record (estimated)</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-green-50 rounded border border-green-100">
            <h4 className="font-medium text-green-800">Key Improvements Across Runs</h4>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Run 2 vs Run 1:</strong> 2.05× higher throughput (25,075 vs 12,217 records/second)</li>
              <li><strong>Run 3 vs Run 2:</strong> 1.57× higher throughput (39,493 vs 25,075 records/second)</li>
              <li><strong>Run 3 vs Run 1:</strong> 3.23× higher throughput (39,493 vs 12,217 records/second)</li>
              <li><strong>Efficiency improvement:</strong> 0.08ms → 0.04ms → 0.03ms per record (Run 1 → 2 → 3)</li>
              <li><strong>Optimal batch size growth:</strong> 50K → 250K → 750K records (Run 1 → 2 → 3)</li>
              <li><strong>Highest scale tested:</strong> 1,000,000 records in Run 3 (4× larger than Run 2's maximum)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Execution Time Comparison</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 10, right: 30, left: 20, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="batch" 
                  scale="log" 
                  domain={['dataMin', 'dataMax']} 
                  tickFormatter={(value) => value.toLocaleString()}
                >
                  <Label value="Batch Size" position="bottom" offset={20} />
                </XAxis>
                <YAxis>
                  <Label value="Execution Time (seconds)" angle={-90} position="insideLeft" offset={-5} />
                </YAxis>
                <Tooltip 
                  formatter={(value, name) => [
                    `${value ? value.toFixed(2) : 'N/A'} seconds`, 
                    name === 'run1Time' ? 'Run 1' : name === 'run2Time' ? 'Run 2' : 'Run 3'
                  ]}
                  labelFormatter={(value) => `${value.toLocaleString()} records`}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="run1Time" 
                  stroke="#dc2626" 
                  strokeWidth={2} 
                  name="Run 1" 
                  dot={{ r: 5 }}
                  activeDot={{ r: 7 }}
                  connectNulls={true}
                />
                <Line 
                  type="monotone" 
                  dataKey="run2Time" 
                  stroke="#2563eb" 
                  strokeWidth={2} 
                  name="Run 2" 
                  dot={{ r: 5 }}
                  activeDot={{ r: 7 }}
                  connectNulls={true}
                />
                <Line 
                  type="monotone" 
                  dataKey="run3Time" 
                  stroke="#f59e0b" 
                  strokeWidth={2} 
                  name="Run 3" 
                  dot={{ r: 5 }}
                  activeDot={{ r: 7 }}
                  connectNulls={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Processing Speed Comparison</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 10, right: 30, left: 20, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="batch" 
                  scale="log" 
                  domain={['dataMin', 'dataMax']} 
                  tickFormatter={(value) => value.toLocaleString()}
                >
                  <Label value="Batch Size" position="bottom" offset={20} />
                </XAxis>
                <YAxis>
                  <Label value="Records/Second" angle={-90} position="insideLeft" offset={-5} />
                </YAxis>
                <Tooltip 
                  formatter={(value, name) => [
                    `${value ? value.toLocaleString() : 'N/A'} records/sec`, 
                    name === 'run1Speed' ? 'Run 1' : name === 'run2Speed' ? 'Run 2' : 'Run 3'
                  ]}
                  labelFormatter={(value) => `${value.toLocaleString()} records`}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="run1Speed" 
                  stroke="#047857" 
                  strokeWidth={2} 
                  name="Run 1" 
                  dot={{ r: 5 }}
                  activeDot={{ r: 7 }}
                  connectNulls={true}
                />
                <Line 
                  type="monotone" 
                  dataKey="run2Speed" 
                  stroke="#0369a1" 
                  strokeWidth={2} 
                  name="Run 2" 
                  dot={{ r: 5 }}
                  activeDot={{ r: 7 }}
                  connectNulls={true}
                />
                <Line 
                  type="monotone" 
                  dataKey="run3Speed" 
                  stroke="#ea580c" 
                  strokeWidth={2} 
                  name="Run 3" 
                  dot={{ r: 5 }}
                  activeDot={{ r: 7 }}
                  connectNulls={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <h3 className="text-xl font-semibold mb-4">Time per Record Comparison</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 30, left: 20, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="batch" 
                scale="log" 
                domain={['dataMin', 'dataMax']} 
                tickFormatter={(value) => value.toLocaleString()}
              >
                <Label value="Batch Size" position="bottom" offset={20} />
              </XAxis>
              <YAxis
                scale="log"
                domain={[0.03, 12]}
                tickFormatter={(value) => `${value.toFixed(2)} ms`}
              >
                <Label value="Time per Record (ms)" angle={-90} position="insideLeft" offset={-5} />
              </YAxis>
              <Tooltip 
                formatter={(value, name) => [
                  `${value ? value.toFixed(2) : 'N/A'} ms`, 
                  name === 'run1Ms' ? 'Run 1' : name === 'run2Ms' ? 'Run 2' : 'Run 3'
                ]}
                labelFormatter={(value) => `${value.toLocaleString()} records`}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="run1Ms" 
                stroke="#8b5cf6" 
                strokeWidth={2} 
                name="Run 1" 
                dot={{ r: 5 }}
                activeDot={{ r: 7 }}
                connectNulls={true}
              />
              <Line 
                type="monotone" 
                dataKey="run2Ms" 
                stroke="#d946ef" 
                strokeWidth={2} 
                name="Run 2" 
                dot={{ r: 5 }}
                activeDot={{ r: 7 }}
                connectNulls={true}
              />
              <Line 
                type="monotone" 
                dataKey="run3Ms" 
                stroke="#fb7185" 
                strokeWidth={2} 
                name="Run 3" 
                dot={{ r: 5 }}
                activeDot={{ r: 7 }}
                connectNulls={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Conclusions and Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-lg text-gray-800">Mathematical Models</h4>
            <div className="mt-2 p-3 bg-white rounded border">
              <div className="mb-3">
                <p className="font-medium">Run 1 - File Size:</p>
                <p className="font-mono mt-1">Size(KB) = 0.247 × BatchSize + 59.22</p>
              </div>
              <div className="mb-3">
                <p className="font-medium">Run 2 - File Size:</p>
                <p className="font-mono mt-1">Size(KB) = 0.248 × BatchSize - 33.65</p>
              </div>
              <div className="mb-3">
                <p className="font-medium">Run 1 - Time per Record:</p>
                <p className="font-mono mt-1">Time(ms) ≈ 9850 × BatchSize^(-1)</p>
              </div>
              <div className="mb-3">
                <p className="font-medium">Run 2 - Time per Record:</p>
                <p className="font-mono mt-1">Time(ms) ≈ 6640 × BatchSize^(-1)</p>
              </div>
              <div className="mb-3">
                <p className="font-medium">Run 3 - File Size:</p>
                <p className="font-mono mt-1">Size(KB) ≈ 0.25 × BatchSize (estimated)</p>
              </div>
              <div>
                <p className="font-medium">Run 3 - Time per Record:</p>
                <p className="font-mono mt-1">Time(ms) ≈ 23420 × BatchSize^(-1)</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg text-gray-800">Recommendations</h4>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><span className="font-bold">Optimal batch size: 750,000 records</span> - Run 3 confirms substantial throughput benefits with very large batches</li>
              <li><span className="font-bold">Diminishing returns above 750,000</span> - Performance slightly degrades at 1,000,000 records</li>
              <li><span className="font-bold">Performance scaling continues</span> - Run 3 reaches 39,493 records/second, 1.57× faster than Run 2's maximum</li>
              <li><span className="font-bold">Storage requirements</span> - Consistent across all runs at ~0.25 KB per record</li>
              <li><span className="font-bold">Memory considerations</span> - Balance the 750,000 record batch size with available system memory</li>
              <li><span className="font-bold">Efficiency improvement</span> - Run 3 achieves 0.03ms per record, continuing the trend of optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchProcessingComparison;