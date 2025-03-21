// import React, { useState } from 'react';

// // Simple dashboard for Sudan-UAE ICJ case narrative analysis
// const NarrativeDashboard = () => {
//   const [activeTab, setActiveTab] = useState('overview');
  
//   // Primary narratives identified in the analysis
//   const narratives = [
//     { key: "ICJ_Process", name: "ICJ Process and Jurisdiction", strength: 425, percentage: 38 },
//     { key: "UAE_Support_for_RSF", name: "UAE Support for RSF", strength: 266, percentage: 24 },
//     { key: "Genocide_Allegations", name: "Genocide Allegations", strength: 257, percentage: 23 },
//     { key: "Humanitarian_Crisis", name: "Humanitarian Crisis", strength: 71, percentage: 6 },
//     { key: "Regional_Geopolitics", name: "Regional Geopolitics", strength: 64, percentage: 6 },
//     { key: "UAE_Denial", name: "UAE Denial", strength: 33, percentage: 3 },
//     { key: "Economic_Interests", name: "Economic Interests", strength: 14, percentage: 1 }
//   ];
  
//   // Narrative shifts over time
//   const narrativeShifts = [
//     {
//       fromDay: 14,
//       toDay: 15,
//       fromNarrative: "ICJ Process and Jurisdiction",
//       toNarrative: "Humanitarian Crisis"
//     },
//     {
//       fromDay: 15,
//       toDay: 16,
//       fromNarrative: "Humanitarian Crisis",
//       toNarrative: "Regional Geopolitics"
//     },
//     {
//       fromDay: 16,
//       toDay: 17,
//       fromNarrative: "Regional Geopolitics",
//       toNarrative: "ICJ Process and Jurisdiction"
//     },
//     {
//       fromDay: 17,
//       toDay: 18,
//       fromNarrative: "ICJ Process and Jurisdiction",
//       toNarrative: "Genocide Allegations"
//     },
//     {
//       fromDay: 18,
//       toDay: 19,
//       fromNarrative: "Genocide Allegations",
//       toNarrative: "ICJ Process and Jurisdiction"
//     },
//     {
//       fromDay: 19,
//       toDay: 20,
//       fromNarrative: "ICJ Process and Jurisdiction",
//       toNarrative: "Genocide Allegations"
//     }
//   ];
  
//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <header className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">
//           Sudan-UAE ICJ Case Narrative Analysis
//         </h1>
//         <p className="text-gray-600">
//           Analyzing media narratives around Sudan's case against the UAE at the International Court of Justice (March 6-20, 2025)
//         </p>
//       </header>
      
//       {/* Navigation Tabs */}
//       <div className="border-b border-gray-200 mb-6">
//         <nav className="flex flex-wrap -mb-px">
//           <button
//             className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm ${
//               activeTab === 'overview' 
//                 ? 'border-blue-500 text-blue-600' 
//                 : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//             }`}
//             onClick={() => setActiveTab('overview')}
//           >
//             Overview
//           </button>
//           <button
//             className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm ${
//               activeTab === 'timeline' 
//                 ? 'border-blue-500 text-blue-600' 
//                 : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//             }`}
//             onClick={() => setActiveTab('timeline')}
//           >
//             Timeline
//           </button>
//           <button
//             className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm ${
//               activeTab === 'insights' 
//                 ? 'border-blue-500 text-blue-600' 
//                 : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//             }`}
//             onClick={() => setActiveTab('insights')}
//           >
//             Key Insights
//           </button>
//           <button
//             className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm ${
//               activeTab === 'network' 
//                 ? 'border-blue-500 text-blue-600' 
//                 : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//             }`}
//             onClick={() => setActiveTab('network')}
//           >
//             Narrative Network
//           </button>
//           <button
//             className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm ${
//               activeTab === 'heatmap' 
//                 ? 'border-blue-500 text-blue-600' 
//                 : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//             }`}
//             onClick={() => setActiveTab('heatmap')}
//           >
//             Narrative Heatmap
//           </button>
//         </nav>
//       </div>
      
//       {/* Overview Tab */}
//       {activeTab === 'overview' && (
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-bold mb-4">Narrative Analysis Overview</h2>
          
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-3">Main Narratives</h3>
//             <div className="space-y-4">
//               {narratives.map(narrative => (
//                 <div key={narrative.key} className="relative pt-1">
//                   <div className="flex justify-between items-center mb-1">
//                     <div>
//                       <span className="text-sm font-medium">{narrative.name}</span>
//                     </div>
//                     <div className="text-right">
//                       <span className="text-sm font-semibold text-blue-700">{narrative.percentage}%</span>
//                     </div>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-4">
//                     <div 
//                       className="bg-blue-600 h-4 rounded-full" 
//                       style={{ width: `${narrative.percentage}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div className="mt-8">
//             <h3 className="text-lg font-semibold mb-3">Key Findings</h3>
//             <ul className="list-disc pl-5 space-y-2">
//               <li>The <strong>ICJ Process</strong> narrative dominated early coverage (38% overall), reflecting the procedural focus of initial reporting.</li>
//               <li>Allegations of <strong>UAE Support for RSF</strong> (24%) and <strong>Genocide</strong> (23%) were consistently present but gained prominence later in the coverage period.</li>
//               <li>A significant narrative shift occurred around March 15, when focus moved from legal process to <strong>Humanitarian Crisis</strong> and <strong>Regional Geopolitics</strong>.</li>
//               <li>Most narratives emerged immediately at the case filing (March 6), but <strong>Economic Interests</strong> appeared later (March 16), adding new context.</li>
//               <li><strong>Genocide Allegations</strong> became increasingly prominent in the final days (March 18-20), indicating a shift from event-based to deeper analytical coverage.</li>
//             </ul>
//           </div>
//         </div>
//       )}
      
//       {/* Timeline Tab */}
//       {activeTab === 'timeline' && (
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-bold mb-4">Narrative Timeline</h2>
          
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-3">Narrative Shifts</h3>
//             <div className="relative pl-6 border-l-2 border-gray-300">
//               {narrativeShifts.map((shift, index) => (
//                 <div key={index} className="mb-8 relative">
//                   <div className="absolute left-0 -translate-x-4 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
//                     {shift.fromDay}
//                   </div>
//                   <div className="ml-4">
//                     <div className="text-sm text-gray-500">March {shift.fromDay} → {shift.toDay}, 2025</div>
//                     <div className="mt-1 font-medium">
//                       {shift.fromNarrative} → {shift.toNarrative}
//                     </div>
//                     <div className="mt-1 text-sm text-gray-600">
//                       {index === 0 && "Initial legal focus gave way to humanitarian concerns"}
//                       {index === 1 && "Coverage shifted to regional political implications"}
//                       {index === 2 && "Return to legal process after geopolitical context"}
//                       {index === 3 && "Attention moved to specific genocide allegations"}
//                       {index === 4 && "Brief return to procedural aspects"}
//                       {index === 5 && "Final focus on detailed genocide claims"}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div className="mt-6 bg-gray-50 p-4 rounded-lg">
//             <h3 className="text-lg font-semibold mb-2">Timeline Analysis</h3>
//             <p className="text-gray-700">
//               The narrative timeline reveals a clear progression from procedural reporting to more substantive analysis. Early coverage (March 6-14) focused primarily on the legal process and filing details. Mid-period coverage (March 15-17) expanded to include humanitarian impact and regional context. The final period (March 18-20) delved deeper into the specific genocide allegations, suggesting a maturation of reporting from event-based to analytical coverage.
//             </p>
//           </div>
//         </div>
//       )}
      
//       {/* Insights Tab */}
//       {activeTab === 'insights' && (
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-bold mb-4">Key Narrative Insights</h2>
          
//           <div className="space-y-6">
//             <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
//               <h3 className="font-bold text-lg mb-2">Initial Coverage Phase</h3>
//               <p>The early coverage was dominated by the <strong>ICJ Process</strong> narrative, with significant but secondary attention to <strong>Genocide Allegations</strong> and <strong>UAE Support for RSF</strong>. This reflects the news-driven nature of early reporting, focusing on the filing event itself.</p>
//             </div>
            
//             <div className="p-4 border-l-4 border-green-500 bg-green-50">
//               <h3 className="font-bold text-lg mb-2">Contextual Expansion Phase</h3>
//               <p>Mid-period coverage saw a diversification of narratives, with <strong>Humanitarian Crisis</strong> and <strong>Regional Geopolitics</strong> gaining prominence. This represents a broadening of coverage beyond the event to include wider implications and context.</p>
//             </div>
            
//             <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
//               <h3 className="font-bold text-lg mb-2">Analytical Depth Phase</h3>
//               <p>Later coverage (March 18-20) shifted toward deeper analysis of <strong>Genocide Allegations</strong>, examining specific claims and evidence. The <strong>Economic Interests</strong> narrative also emerged during this phase, adding layers of complexity to the reporting.</p>
//             </div>
            
//             <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
//               <h3 className="font-bold text-lg mb-2">Subnarrative Patterns</h3>
//               <p>Within major narratives, specific subnarratives gained prominence at different points. References to the <strong>Masalit people</strong> increased in later coverage, while discussion of <strong>ICJ jurisdiction</strong> issues was prominent early on. The <strong>gold trade</strong> emerged as a significant economic subnarrative mid-way through the period.</p>
//             </div>
            
//             <div className="p-4 border-l-4 border-red-500 bg-red-50">
//               <h3 className="font-bold text-lg mb-2">Media Evolution Pattern</h3>
//               <p>The overall narrative pattern suggests a typical media evolution: from event reporting to contextual expansion to analytical depth. This three-phase pattern is common in international legal coverage and demonstrates how media narratives mature over time as more information and analysis becomes available.</p>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Network Tab */}
//       {activeTab === 'network' && (
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-bold mb-4">Narrative Network Analysis</h2>
          
//           <p className="text-gray-600 mb-6">
//             Visualizing the interconnections between narratives and their relationships across the coverage period.
//           </p>
          
//           {/* Simple Network Visualization */}
//           <div className="border rounded-lg p-4 mb-6 relative h-96 bg-gray-50">
//             {/* Central node: ICJ Process */}
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//               <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
//                 ICJ Process
//               </div>
//             </div>
            
//             {/* Connected nodes with lines */}
//             <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//               <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                 Genocide Allegations
//               </div>
//             </div>
            
//             <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
//               <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                 UAE Support for RSF
//               </div>
//             </div>
            
//             <div className="absolute bottom-1/4 right-1/3 transform translate-x-1/2">
//               <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                 Humanitarian Crisis
//               </div>
//             </div>
            
//             <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2">
//               <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                 Regional Geopolitics
//               </div>
//             </div>
            
//             <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
//               <div className="w-14 h-14 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                 UAE Denial
//               </div>
//             </div>
            
//             <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
//               <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                 Economic Interests
//               </div>
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <h3 className="text-lg font-semibold mb-3">Network Centrality</h3>
//               <p className="text-sm text-gray-700 mb-2">
//                 The <strong>ICJ Process</strong> narrative serves as the central hub in the network, connected to all other narratives. This reflects its role as the framework within which all other narratives operate.
//               </p>
//               <p className="text-sm text-gray-700">
//                 <strong>Genocide Allegations</strong> and <strong>UAE Support for RSF</strong> form a strong triangular relationship with the ICJ Process narrative, creating the core thematic structure of the coverage.
//               </p>
//             </div>
            
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <h3 className="text-lg font-semibold mb-3">Narrative Clusters</h3>
//               <p className="text-sm text-gray-700 mb-2">
//                 Two distinct narrative clusters emerge: the <strong>legal-factual cluster</strong> (ICJ Process, Genocide Allegations, UAE Support) and the <strong>contextual cluster</strong> (Humanitarian Crisis, Regional Geopolitics, Economic Interests).
//               </p>
//               <p className="text-sm text-gray-700">
//                 <strong>UAE Denial</strong> stands somewhat isolated, primarily connected to the UAE Support narrative, indicating its reactive rather than substantive role in the coverage.
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Heatmap Tab */}
//       {activeTab === 'heatmap' && (
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-bold mb-4">Narrative Strength Heatmap</h2>
          
//           <p className="text-gray-600 mb-6">
//             Visualizing the intensity of each narrative throughout the coverage period (March 6-20, 2025)
//           </p>
          
//           {/* Day labels */}
//           <div className="flex border-b mb-2">
//             <div className="w-28 flex-shrink-0"></div>
//             {[6, 7, 8, 10, 11, 14, 15, 16, 17, 18, 19, 20].map(day => (
//               <div key={day} className="flex-1 text-center text-sm font-medium">
//                 {day}
//               </div>
//             ))}
//           </div>
          
//           {/* Narrative rows */}
//           {[
//             { key: 'ICJ_Process', name: 'ICJ Process', values: [65, 55, 50, 48, 45, 42, 25, 22, 35, 22, 30, 18] },
//             { key: 'Genocide_Allegations', name: 'Genocide', values: [28, 25, 20, 22, 18, 16, 20, 22, 25, 38, 20, 42] },
//             { key: 'UAE_Support_for_RSF', name: 'UAE Support', values: [35, 30, 28, 26, 22, 21, 18, 24, 26, 18, 18, 20] }
//           ].map(narrative => (
//             <div key={narrative.key} className="flex items-center mb-2">
//               <div className="w-28 text-sm font-medium pr-2">{narrative.name}</div>
//               {narrative.values.map((value, i) => {
//                 const intensity = value / 65 * 100;
//                 return (
//                   <div key={i} className="flex-1 h-10 flex items-center justify-center border text-xs"
//                     style={{ 
//                       backgroundColor: `rgba(59, 130, 246, ${intensity / 100})`,
//                       color: intensity > 50 ? 'white' : 'black'
//                     }}
//                   >
//                     {value}
//                   </div>
//                 );
//               })}
//             </div>
//           ))}
          
//           <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//             <h3 className="text-lg font-bold mb-2">Heatmap Insights:</h3>
//             <p className="text-sm">
//               The heatmap reveals clear patterns in narrative strength across the coverage period. ICJ Process dominated early coverage but gradually diminished, while Genocide Allegations gained prominence in the final days, particularly on days 18 and 20. UAE Support maintained a consistent presence throughout the period with minor fluctuations.
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NarrativeDashboard;
































































import React, { useState } from 'react';

// Simple dashboard for Sudan-UAE ICJ case narrative analysis
const NarrativeDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Primary narratives identified in the analysis
  const narratives = [
    { key: "ICJ_Process", name: "ICJ Process and Jurisdiction", strength: 425, percentage: 38 },
    { key: "UAE_Support_for_RSF", name: "UAE Support for RSF", strength: 266, percentage: 24 },
    { key: "Genocide_Allegations", name: "Genocide Allegations", strength: 257, percentage: 23 },
    { key: "Humanitarian_Crisis", name: "Humanitarian Crisis", strength: 71, percentage: 6 },
    { key: "Regional_Geopolitics", name: "Regional Geopolitics", strength: 64, percentage: 6 },
    { key: "UAE_Denial", name: "UAE Denial", strength: 33, percentage: 3 },
    { key: "Economic_Interests", name: "Economic Interests", strength: 14, percentage: 1 }
  ];
  
  // Narrative shifts over time
  const narrativeShifts = [
    {
      fromDay: 14,
      toDay: 15,
      fromNarrative: "ICJ Process and Jurisdiction",
      toNarrative: "Humanitarian Crisis"
    },
    {
      fromDay: 15,
      toDay: 16,
      fromNarrative: "Humanitarian Crisis",
      toNarrative: "Regional Geopolitics"
    },
    {
      fromDay: 16,
      toDay: 17,
      fromNarrative: "Regional Geopolitics",
      toNarrative: "ICJ Process and Jurisdiction"
    },
    {
      fromDay: 17,
      toDay: 18,
      fromNarrative: "ICJ Process and Jurisdiction",
      toNarrative: "Genocide Allegations"
    },
    {
      fromDay: 18,
      toDay: 19,
      fromNarrative: "Genocide Allegations",
      toNarrative: "ICJ Process and Jurisdiction"
    },
    {
      fromDay: 19,
      toDay: 20,
      fromNarrative: "ICJ Process and Jurisdiction",
      toNarrative: "Genocide Allegations"
    }
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Sudan-UAE ICJ Case Narrative Analysis
          </h1>
          <p className="text-gray-600">
            Analysing media narratives around Sudan's case against the UAE at the International Court of Justice (March 6–20, 2025)
          </p>
        </header>
        
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex flex-wrap -mb-px">
            {['overview', 'timeline', 'insights', 'network', 'heatmap'].map((tab) => (
              <button
                key={tab}
                className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm transition-colours ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'overview'
                  ? 'Overview'
                  : tab === 'timeline'
                  ? 'Timeline'
                  : tab === 'insights'
                  ? 'Key Insights'
                  : tab === 'network'
                  ? 'Narrative Network'
                  : 'Narrative Heatmap'}
              </button>
            ))}
          </nav>
        </div>
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Narrative Analysis Overview</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Main Narratives</h3>
              <div className="space-y-4">
                {narratives.map(narrative => (
                  <div key={narrative.key} className="relative pt-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{narrative.name}</span>
                      <span className="text-sm font-semibold text-blue-700">{narrative.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-blue-600 h-4 rounded-full" 
                        style={{ width: `${narrative.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">Key Findings</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  The <strong>ICJ Process</strong> narrative dominated early coverage (38% overall), reflecting the procedural focus of initial reporting.
                </li>
                <li>
                  Allegations of <strong>UAE Support for RSF</strong> (24%) and <strong>Genocide</strong> (23%) were consistently present but gained prominence later in the coverage period.
                </li>
                <li>
                  A significant narrative shift occurred around March 15, when focus moved from legal process to <strong>Humanitarian Crisis</strong> and <strong>Regional Geopolitics</strong>.
                </li>
                <li>
                  Most narratives emerged immediately at the case filing (March 6), but <strong>Economic Interests</strong> appeared later (March 16), adding new context.
                </li>
                <li>
                  <strong>Genocide Allegations</strong> became increasingly prominent in the final days (March 18–20), indicating a shift from event-based to deeper analytical coverage.
                </li>
              </ul>
            </div>
          </div>
        )}
        
        {/* Timeline Tab */}
        {activeTab === 'timeline' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Narrative Timeline</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Narrative Shifts</h3>
              <div className="relative pl-6 border-l-2 border-gray-300">
                {narrativeShifts.map((shift, index) => (
                  <div key={index} className="mb-8 relative">
                    <div className="absolute left-0 -translate-x-4 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                      {shift.fromDay}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-500">March {shift.fromDay} → {shift.toDay}, 2025</div>
                      <div className="mt-1 font-medium text-gray-700">
                        {shift.fromNarrative} → {shift.toNarrative}
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        {index === 0 && "Initial legal focus gave way to humanitarian concerns"}
                        {index === 1 && "Coverage shifted to regional political implications"}
                        {index === 2 && "Return to legal process after geopolitical context"}
                        {index === 3 && "Attention moved to specific genocide allegations"}
                        {index === 4 && "Brief return to procedural aspects"}
                        {index === 5 && "Final focus on detailed genocide claims"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Timeline Analysis</h3>
              <p className="text-gray-700">
                The narrative timeline reveals a clear progression from procedural reporting to more substantive analysis. Early coverage (March 6–14) focused primarily on the legal process and filing details. Mid-period coverage (March 15–17) expanded to include humanitarian impact and regional context. The final period (March 18–20) delved deeper into the specific genocide allegations, suggesting a maturation of reporting from event-based to analytical coverage.
              </p>
            </div>
          </div>
        )}
        
        {/* Insights Tab */}
        {activeTab === 'insights' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Key Narrative Insights</h2>
            
            <div className="space-y-6">
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-lg mb-2">Initial Coverage Phase</h3>
                <p className="text-gray-700">
                  The early coverage was dominated by the <strong>ICJ Process</strong> narrative, with significant but secondary attention to <strong>Genocide Allegations</strong> and <strong>UAE Support for RSF</strong>. This reflects the news-driven nature of early reporting, focusing on the filing event itself.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-lg mb-2">Contextual Expansion Phase</h3>
                <p className="text-gray-700">
                  Mid-period coverage saw a diversification of narratives, with <strong>Humanitarian Crisis</strong> and <strong>Regional Geopolitics</strong> gaining prominence. This represents a broadening of coverage beyond the event to include wider implications and context.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-lg mb-2">Analytical Depth Phase</h3>
                <p className="text-gray-700">
                  Later coverage (March 18–20) shifted toward deeper analysis of <strong>Genocide Allegations</strong>, examining specific claims and evidence. The <strong>Economic Interests</strong> narrative also emerged during this phase, adding layers of complexity to the reporting.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-lg mb-2">Subnarrative Patterns</h3>
                <p className="text-gray-700">
                  Within major narratives, specific subnarratives gained prominence at different points. References to the <strong>Masalit people</strong> increased in later coverage, while discussion of <strong>ICJ jurisdiction</strong> issues was prominent early on. The <strong>gold trade</strong> emerged as a significant economic subnarrative mid-way through the period.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-lg mb-2">Media Evolution Pattern</h3>
                <p className="text-gray-700">
                  The overall narrative pattern suggests a typical media evolution: from event reporting to contextual expansion to analytical depth. This three-phase pattern is common in international legal coverage and demonstrates how media narratives mature over time as more information and analysis becomes available.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Network Tab */}
        {activeTab === 'network' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Narrative Network Analysis</h2>
            
            <p className="text-gray-600 mb-6">
              Visualising the interconnections between narratives and their relationships across the coverage period.
            </p>
            
            {/* Simple Network Visualization */}
            <div className="border rounded-lg p-4 mb-6 relative h-96 bg-gray-50">
              {/* Central node: ICJ Process */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                  ICJ Process
                </div>
              </div>
              
              {/* Connected nodes with lines */}
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
                  Genocide Allegations
                </div>
              </div>
              
              <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
                <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
                  UAE Support for RSF
                </div>
              </div>
              
              <div className="absolute bottom-1/4 right-1/3 transform translate-x-1/2">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
                  Humanitarian Crisis
                </div>
              </div>
              
              <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2">
                <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
                  Regional Geopolitics
                </div>
              </div>
              
              <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-14 h-14 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
                  UAE Denial
                </div>
              </div>
              
              <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
                  Economic Interests
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Network Centrality</h3>
                <p className="text-sm text-gray-700 mb-2">
                  The <strong>ICJ Process</strong> narrative serves as the central hub in the network, connected to all other narratives. This reflects its role as the framework within which all other narratives operate.
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Genocide Allegations</strong> and <strong>UAE Support for RSF</strong> form a strong triangular relationship with the ICJ Process narrative, creating the core thematic structure of the coverage.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Narrative Clusters</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Two distinct narrative clusters emerge: the <strong>legal-factual cluster</strong> (ICJ Process, Genocide Allegations, UAE Support) and the <strong>contextual cluster</strong> (Humanitarian Crisis, Regional Geopolitics, Economic Interests).
                </p>
                <p className="text-sm text-gray-700">
                  <strong>UAE Denial</strong> stands somewhat isolated, primarily connected to the UAE Support narrative, indicating its reactive rather than substantive role in the coverage.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Heatmap Tab */}
        {activeTab === 'heatmap' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Narrative Strength Heatmap</h2>
            
            <p className="text-gray-600 mb-6">
              Visualising the intensity of each narrative throughout the coverage period (March 6–20, 2025)
            </p>
            
            {/* Day labels */}
            <div className="flex border-b mb-2">
              <div className="w-28 flex-shrink-0"></div>
              {[6, 7, 8, 10, 11, 14, 15, 16, 17, 18, 19, 20].map(day => (
                <div key={day} className="flex-1 text-center text-sm font-medium">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Narrative rows */}
            {[
              { key: 'ICJ_Process', name: 'ICJ Process', values: [65, 55, 50, 48, 45, 42, 25, 22, 35, 22, 30, 18] },
              { key: 'Genocide_Allegations', name: 'Genocide', values: [28, 25, 20, 22, 18, 16, 20, 22, 25, 38, 20, 42] },
              { key: 'UAE_Support_for_RSF', name: 'UAE Support', values: [35, 30, 28, 26, 22, 21, 18, 24, 26, 18, 18, 20] }
            ].map(narrative => (
              <div key={narrative.key} className="flex items-center mb-2">
                <div className="w-28 text-sm font-medium pr-2">{narrative.name}</div>
                {narrative.values.map((value, i) => {
                  const intensity = (value / 65) * 100;
                  return (
                    <div
                      key={i}
                      className="flex-1 h-10 flex items-center justify-center border text-xs"
                      style={{
                        backgroundColor: `rgba(59, 130, 246, ${intensity / 100})`,
                        color: intensity > 50 ? 'white' : 'black'
                      }}
                    >
                      {value}
                    </div>
                  );
                })}
              </div>
            ))}
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Heatmap Insights:</h3>
              <p className="text-sm text-gray-700">
                The heatmap reveals clear patterns in narrative strength across the coverage period. ICJ Process dominated early coverage but gradually diminished, while Genocide Allegations gained prominence in the final days—particularly on days 18 and 20. UAE Support maintained a consistent presence throughout the period with minor fluctuations.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NarrativeDashboard;