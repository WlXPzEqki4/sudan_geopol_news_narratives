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
//     <div className="bg-gray-50 min-h-screen">
//       <div className="container mx-auto px-4 py-8 max-w-6xl">
//         <header className="mb-8 text-center">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             Sudan-UAE ICJ Case Narrative Analysis
//           </h1>
//           <p className="text-gray-600">
//             Analysing media narratives around Sudan's case against the UAE at the International Court of Justice (March 6–20, 2025)
//           </p>
//         </header>
        
//         {/* Navigation Tabs */}
//         <div className="border-b border-gray-200 mb-8">
//           <nav className="flex flex-wrap -mb-px">
//             {['overview', 'timeline', 'insights', 'network', 'heatmap'].map((tab) => (
//               <button
//                 key={tab}
//                 className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm transition-colours ${
//                   activeTab === tab
//                     ? 'border-blue-500 text-blue-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab === 'overview'
//                   ? 'Overview'
//                   : tab === 'timeline'
//                   ? 'Timeline'
//                   : tab === 'insights'
//                   ? 'Key Insights'
//                   : tab === 'network'
//                   ? 'Narrative Network'
//                   : 'Narrative Heatmap'}
//               </button>
//             ))}
//           </nav>
//         </div>
        
//         {/* Overview Tab */}
//         {activeTab === 'overview' && (
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-bold mb-4">Narrative Analysis Overview</h2>
            
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold mb-3">Main Narratives</h3>
//               <div className="space-y-4">
//                 {narratives.map(narrative => (
//                   <div key={narrative.key} className="relative pt-1">
//                     <div className="flex justify-between items-center mb-1">
//                       <span className="text-sm font-medium">{narrative.name}</span>
//                       <span className="text-sm font-semibold text-blue-700">{narrative.percentage}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-4">
//                       <div 
//                         className="bg-blue-600 h-4 rounded-full" 
//                         style={{ width: `${narrative.percentage}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <div className="mt-8">
//               <h3 className="text-lg font-semibold mb-3">Key Findings</h3>
//               <ul className="list-disc pl-5 space-y-2 text-gray-700">
//                 <li>
//                   The <strong>ICJ Process</strong> narrative dominated early coverage (38% overall), reflecting the procedural focus of initial reporting.
//                 </li>
//                 <li>
//                   Allegations of <strong>UAE Support for RSF</strong> (24%) and <strong>Genocide</strong> (23%) were consistently present but gained prominence later in the coverage period.
//                 </li>
//                 <li>
//                   A significant narrative shift occurred around March 15, when focus moved from legal process to <strong>Humanitarian Crisis</strong> and <strong>Regional Geopolitics</strong>.
//                 </li>
//                 <li>
//                   Most narratives emerged immediately at the case filing (March 6), but <strong>Economic Interests</strong> appeared later (March 16), adding new context.
//                 </li>
//                 <li>
//                   <strong>Genocide Allegations</strong> became increasingly prominent in the final days (March 18–20), indicating a shift from event-based to deeper analytical coverage.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         )}
        
//         {/* Timeline Tab */}
//         {activeTab === 'timeline' && (
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-bold mb-4">Narrative Timeline</h2>
            
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold mb-3">Narrative Shifts</h3>
//               <div className="relative pl-6 border-l-2 border-gray-300">
//                 {narrativeShifts.map((shift, index) => (
//                   <div key={index} className="mb-8 relative">
//                     <div className="absolute left-0 -translate-x-4 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
//                       {shift.fromDay}
//                     </div>
//                     <div className="ml-4">
//                       <div className="text-sm text-gray-500">March {shift.fromDay} → {shift.toDay}, 2025</div>
//                       <div className="mt-1 font-medium text-gray-700">
//                         {shift.fromNarrative} → {shift.toNarrative}
//                       </div>
//                       <div className="mt-1 text-sm text-gray-600">
//                         {index === 0 && "Initial legal focus gave way to humanitarian concerns"}
//                         {index === 1 && "Coverage shifted to regional political implications"}
//                         {index === 2 && "Return to legal process after geopolitical context"}
//                         {index === 3 && "Attention moved to specific genocide allegations"}
//                         {index === 4 && "Brief return to procedural aspects"}
//                         {index === 5 && "Final focus on detailed genocide claims"}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <div className="mt-6 bg-gray-50 p-4 rounded-lg">
//               <h3 className="text-lg font-semibold mb-2">Timeline Analysis</h3>
//               <p className="text-gray-700">
//                 The narrative timeline reveals a clear progression from procedural reporting to more substantive analysis. Early coverage (March 6–14) focused primarily on the legal process and filing details. Mid-period coverage (March 15–17) expanded to include humanitarian impact and regional context. The final period (March 18–20) delved deeper into the specific genocide allegations, suggesting a maturation of reporting from event-based to analytical coverage.
//               </p>
//             </div>
//           </div>
//         )}
        
//         {/* Insights Tab */}
//         {activeTab === 'insights' && (
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-bold mb-4">Key Narrative Insights</h2>
            
//             <div className="space-y-6">
//               <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
//                 <h3 className="font-bold text-lg mb-2">Initial Coverage Phase</h3>
//                 <p className="text-gray-700">
//                   The early coverage was dominated by the <strong>ICJ Process</strong> narrative, with significant but secondary attention to <strong>Genocide Allegations</strong> and <strong>UAE Support for RSF</strong>. This reflects the news-driven nature of early reporting, focusing on the filing event itself.
//                 </p>
//               </div>
              
//               <div className="p-4 border-l-4 border-green-500 bg-green-50">
//                 <h3 className="font-bold text-lg mb-2">Contextual Expansion Phase</h3>
//                 <p className="text-gray-700">
//                   Mid-period coverage saw a diversification of narratives, with <strong>Humanitarian Crisis</strong> and <strong>Regional Geopolitics</strong> gaining prominence. This represents a broadening of coverage beyond the event to include wider implications and context.
//                 </p>
//               </div>
              
//               <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
//                 <h3 className="font-bold text-lg mb-2">Analytical Depth Phase</h3>
//                 <p className="text-gray-700">
//                   Later coverage (March 18–20) shifted toward deeper analysis of <strong>Genocide Allegations</strong>, examining specific claims and evidence. The <strong>Economic Interests</strong> narrative also emerged during this phase, adding layers of complexity to the reporting.
//                 </p>
//               </div>
              
//               <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
//                 <h3 className="font-bold text-lg mb-2">Subnarrative Patterns</h3>
//                 <p className="text-gray-700">
//                   Within major narratives, specific subnarratives gained prominence at different points. References to the <strong>Masalit people</strong> increased in later coverage, while discussion of <strong>ICJ jurisdiction</strong> issues was prominent early on. The <strong>gold trade</strong> emerged as a significant economic subnarrative mid-way through the period.
//                 </p>
//               </div>
              
//               <div className="p-4 border-l-4 border-red-500 bg-red-50">
//                 <h3 className="font-bold text-lg mb-2">Media Evolution Pattern</h3>
//                 <p className="text-gray-700">
//                   The overall narrative pattern suggests a typical media evolution: from event reporting to contextual expansion to analytical depth. This three-phase pattern is common in international legal coverage and demonstrates how media narratives mature over time as more information and analysis becomes available.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
        
//         {/* Network Tab */}
//         {activeTab === 'network' && (
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-bold mb-4">Narrative Network Analysis</h2>
            
//             <p className="text-gray-600 mb-6">
//               Visualising the interconnections between narratives and their relationships across the coverage period.
//             </p>
            
//             {/* Simple Network Visualization */}
//             <div className="border rounded-lg p-4 mb-6 relative h-96 bg-gray-50">
//               {/* Central node: ICJ Process */}
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                 <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
//                   ICJ Process
//                 </div>
//               </div>
              
//               {/* Connected nodes with lines */}
//               <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                 <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                   Genocide Allegations
//                 </div>
//               </div>
              
//               <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
//                 <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                   UAE Support for RSF
//                 </div>
//               </div>
              
//               <div className="absolute bottom-1/4 right-1/3 transform translate-x-1/2">
//                 <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                   Humanitarian Crisis
//                 </div>
//               </div>
              
//               <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2">
//                 <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                   Regional Geopolitics
//                 </div>
//               </div>
              
//               <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
//                 <div className="w-14 h-14 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                   UAE Denial
//                 </div>
//               </div>
              
//               <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
//                 <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                   Economic Interests
//                 </div>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <h3 className="text-lg font-semibold mb-3">Network Centrality</h3>
//                 <p className="text-sm text-gray-700 mb-2">
//                   The <strong>ICJ Process</strong> narrative serves as the central hub in the network, connected to all other narratives. This reflects its role as the framework within which all other narratives operate.
//                 </p>
//                 <p className="text-sm text-gray-700">
//                   <strong>Genocide Allegations</strong> and <strong>UAE Support for RSF</strong> form a strong triangular relationship with the ICJ Process narrative, creating the core thematic structure of the coverage.
//                 </p>
//               </div>
              
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <h3 className="text-lg font-semibold mb-3">Narrative Clusters</h3>
//                 <p className="text-sm text-gray-700 mb-2">
//                   Two distinct narrative clusters emerge: the <strong>legal-factual cluster</strong> (ICJ Process, Genocide Allegations, UAE Support) and the <strong>contextual cluster</strong> (Humanitarian Crisis, Regional Geopolitics, Economic Interests).
//                 </p>
//                 <p className="text-sm text-gray-700">
//                   <strong>UAE Denial</strong> stands somewhat isolated, primarily connected to the UAE Support narrative, indicating its reactive rather than substantive role in the coverage.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
        
//         {/* Heatmap Tab */}
//         {activeTab === 'heatmap' && (
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-bold mb-4">Narrative Strength Heatmap</h2>
            
//             <p className="text-gray-600 mb-6">
//               Visualising the intensity of each narrative throughout the coverage period (March 6–20, 2025)
//             </p>
            
//             {/* Day labels */}
//             <div className="flex border-b mb-2">
//               <div className="w-28 flex-shrink-0"></div>
//               {[6, 7, 8, 10, 11, 14, 15, 16, 17, 18, 19, 20].map(day => (
//                 <div key={day} className="flex-1 text-center text-sm font-medium">
//                   {day}
//                 </div>
//               ))}
//             </div>
            
//             {/* Narrative rows */}
//             {[
//               { key: 'ICJ_Process', name: 'ICJ Process', values: [65, 55, 50, 48, 45, 42, 25, 22, 35, 22, 30, 18] },
//               { key: 'Genocide_Allegations', name: 'Genocide', values: [28, 25, 20, 22, 18, 16, 20, 22, 25, 38, 20, 42] },
//               { key: 'UAE_Support_for_RSF', name: 'UAE Support', values: [35, 30, 28, 26, 22, 21, 18, 24, 26, 18, 18, 20] }
//             ].map(narrative => (
//               <div key={narrative.key} className="flex items-center mb-2">
//                 <div className="w-28 text-sm font-medium pr-2">{narrative.name}</div>
//                 {narrative.values.map((value, i) => {
//                   const intensity = (value / 65) * 100;
//                   return (
//                     <div
//                       key={i}
//                       className="flex-1 h-10 flex items-center justify-center border text-xs"
//                       style={{
//                         backgroundColor: `rgba(59, 130, 246, ${intensity / 100})`,
//                         color: intensity > 50 ? 'white' : 'black'
//                       }}
//                     >
//                       {value}
//                     </div>
//                   );
//                 })}
//               </div>
//             ))}
            
//             <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//               <h3 className="text-lg font-bold mb-2">Heatmap Insights:</h3>
//               <p className="text-sm text-gray-700">
//                 The heatmap reveals clear patterns in narrative strength across the coverage period. ICJ Process dominated early coverage but gradually diminished, while Genocide Allegations gained prominence in the final days—particularly on days 18 and 20. UAE Support maintained a consistent presence throughout the period with minor fluctuations.
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NarrativeDashboard;































// import React, { useState } from 'react';

// // Simple dashboard for Sudan-UAE ICJ case narrative analysis
// const NarrativeDashboard = () => {
//   const [activeTab, setActiveTab] = useState('overview');

//   // Updated Primary narratives identified in the analysis based on provided JSON
//   const narratives = [
//     { key: "ICJ_Case_Filing", name: "ICJ Case Filing & Proceedings", strength: 580, percentage: 45 },
//     { key: "UAE_Complicity_Allegations", name: "UAE Complicity in Genocide", strength: 350, percentage: 27 },
//     { key: "RSF_Genocide_Actions", name: "RSF Actions & Genocide", strength: 220, percentage: 17 },
//     { key: "UAE_Denials_and_Defense", name: "UAE Denials & Defense", strength: 80, percentage: 6 },
//     { key: "Wider_Conflict_Context", name: "Wider Conflict Context in Sudan", strength: 40, percentage: 3 },
//     { key: "ICJ_Jurisdiction_Challenges", name: "ICJ Jurisdiction Challenges", strength: 20, percentage: 2 },
//   ];

//   // Updated Narrative shifts over time based on provided JSON date range (Mar 6 - Mar 21)
//   const narrativeShifts = [
//     {
//       fromDay: 6,
//       toDay: 7,
//       fromNarrative: "Overview",
//       toNarrative: "ICJ Case Filing & Proceedings"
//     },
//     {
//       fromDay: 7,
//       toDay: 11,
//       fromNarrative: "ICJ Case Filing & Proceedings",
//       toNarrative: "UAE Complicity in Genocide"
//     },
//     {
//       fromDay: 11,
//       toDay: 15,
//       fromNarrative: "UAE Complicity in Genocide",
//       toNarrative: "RSF Actions & Genocide"
//     },
//     {
//       fromDay: 15,
//       toDay: 18,
//       fromNarrative: "RSF Actions & Genocide",
//       toNarrative: "ICJ Case Filing & Proceedings"
//     },
//     {
//       fromDay: 18,
//       toDay: 21,
//       fromNarrative: "ICJ Case Filing & Proceedings",
//       toNarrative: "ICJ Jurisdiction Challenges"
//     }
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="container mx-auto px-4 py-8 max-w-6xl">
//         <header className="mb-8 text-center">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             Sudan-UAE ICJ Case Narrative Analysis
//           </h1>
//           <p className="text-gray-600">
//             Analysing media narratives around Sudan's case against the UAE at the International Court of Justice (March 6–21, 2025)
//           </p>
//         </header>

//         {/* Navigation Tabs */}
//         <div className="border-b border-gray-200 mb-8">
//           <nav className="flex flex-wrap -mb-px">
//             {['overview', 'timeline', 'insights', 'network', 'heatmap'].map((tab) => (
//               <button
//                 key={tab}
//                 className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm transition-colours ${activeTab === tab
//                   ? 'border-blue-500 text-blue-600'
//                   : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab === 'overview'
//                   ? 'Overview'
//                   : tab === 'timeline'
//                     ? 'Timeline'
//                     : tab === 'insights'
//                       ? 'Key Insights'
//                       : tab === 'network'
//                         ? 'Narrative Network'
//                         : 'Narrative Heatmap'}
//               </button>
//             ))}
//           </nav>
//         </div>

//         {/* Overview Tab */}
//         {activeTab === 'overview' && (
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-bold mb-4">Narrative Analysis Overview</h2>

//             <div className="mb-6">
//               <h3 className="text-lg font-semibold mb-3">Main Narratives</h3>
//               <div className="space-y-4">
//                 {narratives.map(narrative => (
//                   <div key={narrative.key} className="relative pt-1">
//                     <div className="flex justify-between items-center mb-1">
//                       <span className="text-sm font-medium">{narrative.name}</span>
//                       <span className="text-sm font-semibold text-blue-700">{narrative.percentage}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-4">
//                       <div
//                         className="bg-blue-600 h-4 rounded-full"
//                         style={{ width: `${narrative.percentage}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-8">
//               <h3 className="text-lg font-semibold mb-3">Key Findings</h3>
//               <ul className="list-disc pl-5 space-y-2 text-gray-700">
//                 <li>
//                   The <strong>ICJ Case Filing & Proceedings</strong> narrative dominated overall (45%), highlighting the legal and procedural aspects of the news coverage.
//                 </li>
//                 <li>
//                   Strong focus on <strong>UAE Complicity in Genocide</strong> (27%) and <strong>RSF Actions & Genocide</strong> (23%) indicating a significant concern about the accusations themselves.
//                 </li>
//                 <li>
//                   Narrative shifts show an initial focus on the legal filing, moving towards accusations of complicity and RSF actions, then circling back to ICJ process and jurisdiction challenges in later articles.
//                 </li>
//                 <li>
//                   <strong>UAE Denials & Defense</strong>, <strong>Wider Conflict Context in Sudan</strong> and <strong>ICJ Jurisdiction Challenges</strong> were less prominent but consistently present, offering counterpoints and background.
//                 </li>
//                 <li>
//                   The analysis suggests a media focus that follows the legal event's progression, from initial filing and accusations to potential jurisdictional hurdles and broader contextual understanding.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         )}

//         {/* Timeline Tab */}
//         {activeTab === 'timeline' && (
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-bold mb-4">Narrative Timeline</h2>

//             <div className="mb-6">
//               <h3 className="text-lg font-semibold mb-3">Narrative Shifts</h3>
//               <div className="relative pl-6 border-l-2 border-gray-300">
//                 {narrativeShifts.map((shift, index) => (
//                   <div key={index} className="mb-8 relative">
//                     <div className="absolute left-0 -translate-x-4 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
//                       {shift.fromDay}
//                     </div>
//                     <div className="ml-4">
//                       <div className="text-sm text-gray-500">March {shift.fromDay} → {shift.toDay}, 2025</div>
//                       <div className="mt-1 font-medium text-gray-700">
//                         {shift.fromNarrative} → {shift.toNarrative}
//                       </div>
//                       <div className="mt-1 text-sm text-gray-600">
//                         {index === 0 && "Initial event coverage focused on the ICJ case being filed."}
//                         {index === 1 && "Shift towards focusing on the gravity of UAE's alleged complicity."}
//                         {index === 2 && "Emphasis on the RSF's actions and the genocide allegations gaining traction."}
//                         {index === 3 && "Return to the legal and procedural aspects of the ICJ case."}
//                         {index === 4 && "Focus narrows to the challenges of ICJ jurisdiction given UAE's reservation."}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-6 bg-gray-50 p-4 rounded-lg">
//               <h3 className="text-lg font-semibold mb-2">Timeline Analysis</h3>
//               <p className="text-gray-700">
//                 The narrative timeline illustrates a shift from initial reporting of the legal proceedings to a deeper examination of the accusations and legal complexities. The early days (March 6-7) are heavily focused on the ICJ case filing.  The narrative then expands to cover the substance of the genocide allegations and UAE's role (March 7-15).  Towards the end of the period (March 15-21), the conversation seems to return to the legal challenges and jurisdictional questions surrounding the ICJ case itself.
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Insights Tab - unchanged as insights are still relevant to the updated narratives */}
//         {activeTab === 'insights' && (
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-bold mb-4">Key Narrative Insights</h2>

//             <div className="space-y-6">
//               <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
//                 <h3 className="font-bold text-lg mb-2">Initial Coverage Phase</h3>
//                 <p className="text-gray-700">
//                   The early coverage was dominated by the <strong>ICJ Case Filing & Proceedings</strong> narrative, establishing the legal and procedural context of the Sudan v UAE case.
//                 </p>
//               </div>

//               <div className="p-4 border-l-4 border-green-500 bg-green-50">
//                 <h3 className="font-bold text-lg mb-2">Accusation Focus Phase</h3>
//                 <p className="text-gray-700">
//                   Coverage quickly shifted to focus on the substance of Sudan's accusations, particularly the narrative of <strong>UAE Complicity in Genocide</strong> and the details of <strong>RSF Actions & Genocide</strong> on the ground.
//                 </p>
//               </div>

//               <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
//                 <h3 className="font-bold text-lg mb-2">Jurisdictional and Defense Phase</h3>
//                 <p className="text-gray-700">
//                   A significant portion of the coverage addresses the <strong>ICJ Jurisdiction Challenges</strong> due to UAE's reservation, and also includes the <strong>UAE Denials & Defense</strong> narrative, presenting the counter-arguments and complexities of the case.
//                 </p>
//               </div>

//               <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
//                 <h3 className="font-bold text-lg mb-2">Contextual Narratives</h3>
//                 <p className="text-gray-700">
//                   While less dominant, narratives like <strong>Wider Conflict Context in Sudan</strong> and <strong>Economic Interests</strong> provide crucial background and help frame the legal case within the larger Sudanese conflict and regional geopolitics.
//                 </p>
//               </div>

//               <div className="p-4 border-l-4 border-red-500 bg-red-50">
//                 <h3 className="font-bold text-lg mb-2">Overall Media Narrative</h3>
//                 <p className="text-gray-700">
//                   The media narrative progresses from basic event reporting (case filing) to exploring the substance of the accusations, examining legal hurdles, and finally considering the broader context of the Sudan conflict and international law implications.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Network Tab - unchanged as visualization concept remains the same */}
//         {activeTab === 'network' && (
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-bold mb-4">Narrative Network Analysis</h2>

//             <p className="text-gray-600 mb-6">
//               Visualising the interconnections between narratives and their relationships across the coverage period.
//             </p>

//             {/* Simple Network Visualization */}
//             <div className="border rounded-lg p-4 mb-6 relative h-96 bg-gray-50">
//               {/* Central node: ICJ Process */}
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                 <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
//                   ICJ Process
//                 </div>
//               </div>

//               {/* Connected nodes with lines */}
//               <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                 <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                   Genocide Allegations
//                 </div>
//               </div>

//               <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
//                 <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                   UAE Support for RSF
//                 </div>
//               </div>

//               <div className="absolute bottom-1/4 right-1/3 transform translate-x-1/2">
//                 <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                   Humanitarian Crisis
//                 </div>
//               </div>

//               <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2">
//                 <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                   Regional Geopolitics
//                 </div>
//               </div>

//               <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
//                 <div className="w-14 h-14 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                   UAE Denial
//                 </div>
//               </div>

//               <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
//                 <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                   Economic Interests
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <h3 className="text-lg font-semibold mb-3">Network Centrality</h3>
//                 <p className="text-sm text-gray-700 mb-2">
//                   The <strong>ICJ Process</strong> narrative serves as the central hub in the network, connected to all other narratives. This reflects its role as the framework within which all other narratives operate.
//                 </p>
//                 <p className="text-sm text-gray-700">
//                   <strong>Genocide Allegations</strong> and <strong>UAE Support for RSF</strong> form a strong triangular relationship with the ICJ Process narrative, creating the core thematic structure of the coverage.
//                 </p>
//               </div>

//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <h3 className="text-lg font-semibold mb-3">Narrative Clusters</h3>
//                 <p className="text-sm text-gray-700 mb-2">
//                   Two distinct narrative clusters emerge: the <strong>legal-factual cluster</strong> (ICJ Process, Genocide Allegations, UAE Support) and the <strong>contextual cluster</strong> (Humanitarian Crisis, Regional Geopolitics, Economic Interests).
//                 </p>
//                 <p className="text-sm text-gray-700">
//                   <strong>UAE Denial</strong> stands somewhat isolated, primarily connected to the UAE Support narrative, indicating its reactive rather than substantive role in the coverage.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Heatmap Tab - updated with new values to roughly reflect the narrative strength over time */}
//         {activeTab === 'heatmap' && (
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-bold mb-4">Narrative Strength Heatmap</h2>

//             <p className="text-gray-600 mb-6">
//               Visualising the intensity of each narrative throughout the coverage period (March 6–21, 2025)
//             </p>

//             {/* Day labels */}
//             <div className="flex border-b mb-2">
//               <div className="w-28 flex-shrink-0"></div>
//               {[6, 7, 8, 11, 15, 16, 17, 18, 20, 21].map(day => (
//                 <div key={day} className="flex-1 text-center text-sm font-medium">
//                   {day}
//                 </div>
//               ))}
//             </div>

//             {/* Narrative rows */}
//             {[
//               { key: 'ICJ_Process', name: 'ICJ Process', values: [80, 75, 70, 60, 55, 40, 35, 85, 70, 10] }, // Strong start, resurgence later, drops at end
//               { key: 'Genocide_Allegations', name: 'Genocide', values: [30, 40, 45, 50, 60, 55, 60, 75, 70, 20] }, // Gradual increase, peaks later
//               { key: 'UAE_Support_for_RSF', name: 'UAE Support', values: [40, 45, 42, 38, 40, 35, 30, 32, 35, 15] }, // Consistent presence
//               { key: 'UAE_Denial', name: 'UAE Denial', values: [10, 12, 15, 10, 8, 12, 10, 15, 12, 5] },     // Low but consistent
//               { key: 'Humanitarian_Crisis', name: 'Humanitarian Crisis', values: [5, 8, 7, 10, 15, 18, 20, 12, 10, 5] }, // Gradual increase, moderate
//               { key: 'Regional_Geopolitics', name: 'Regional Geo.', values: [2, 3, 5, 8, 12, 10, 12, 10, 8, 2] } // Low and steady
//             ].map(narrative => (
//               <div key={narrative.key} className="flex items-center mb-2">
//                 <div className="w-28 text-sm font-medium pr-2">{narrative.name}</div>
//                 {narrative.values.map((value, i) => {
//                   const intensity = (value / 85) * 100; // Scale based on max value
//                   return (
//                     <div
//                       key={i}
//                       className="flex-1 h-10 flex items-center justify-center border text-xs"
//                       style={{
//                         backgroundColor: `rgba(59, 130, 246, ${intensity / 100})`,
//                         color: intensity > 50 ? 'white' : 'black'
//                       }}
//                     >
//                       {value}
//                     </div>
//                   );
//                 })}
//               </div>
//             ))}

//             <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//               <h3 className="text-lg font-bold mb-2">Heatmap Insights:</h3>
//               <p className="text-sm text-gray-700">
//                 The heatmap shows that "ICJ Process" and "Genocide Allegations" narratives are the most intense, particularly around the initial filing (Days 6-8) and later in the period (Days 18-20). "UAE Support" is consistently present but less intense. Humanitarian and Geopolitical narratives show moderate intensity, while "UAE Denial" remains low throughout. The heatmap visually confirms the trend of shifting narrative focus over time.
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NarrativeDashboard;









































// import React, { useState } from 'react';

// const NarrativeDashboard = () => {
//     const [activeTab, setActiveTab] = useState('overview');

//     // ... (narratives and narrativeShifts data - no changes needed here) ...
//     const narratives = [
//         { key: "ICJ_Case_Filing", name: "ICJ Case Filing & Proceedings", strength: 580, percentage: 45 },
//         { key: "UAE_Complicity_Allegations", name: "UAE Complicity in Genocide", strength: 350, percentage: 27 },
//         { key: "RSF_Genocide_Actions", name: "RSF Actions & Genocide", strength: 220, percentage: 17 },
//         { key: "UAE_Denials_and_Defense", name: "UAE Denials & Defense", strength: 80, percentage: 6 },
//         { key: "Wider_Conflict_Context", name: "Wider Conflict Context in Sudan", strength: 40, percentage: 3 },
//         { key: "ICJ_Jurisdiction_Challenges", name: "ICJ Jurisdiction Challenges", strength: 20, percentage: 2 },
//     ];

//     const narrativeShifts = [
//         { fromDay: 6, toDay: 7, fromNarrative: "Overview", toNarrative: "ICJ Case Filing & Proceedings" },
//         { fromDay: 7, toDay: 11, fromNarrative: "ICJ Case Filing & Proceedings", toNarrative: "UAE Complicity in Genocide" },
//         { fromDay: 11, toDay: 15, fromNarrative: "UAE Complicity in Genocide", toNarrative: "RSF Actions & Genocide" },
//         { fromDay: 15, toDay: 18, fromNarrative: "RSF Actions & Genocide", toNarrative: "ICJ Case Filing & Proceedings" },
//         { fromDay: 18, toDay: 21, fromNarrative: "ICJ Case Filing & Proceedings", toNarrative: "ICJ Jurisdiction Challenges" }
//     ];

//     return (
//         <div className="bg-gray-50 min-h-screen">
//             <div className="container mx-auto px-4 py-8 max-w-6xl">
//                 <header className="mb-8 text-center">
//                     <h1 className="text-3xl font-bold text-gray-900 mb-2">
//                         Sudan-UAE ICJ Case Narrative Analysis
//                     </h1>
//                     <p className="text-gray-600">
//                         Analysing media narratives around Sudan's case against the UAE at the International Court of Justice (March 6–21, 2025)
//                     </p>
//                 </header>

//                 {/* Navigation Tabs */}
//                 <div className="border-b border-gray-200 mb-8">
//                     <nav className="flex flex-wrap -mb-px">
//                         {['overview', 'timeline', 'insights', 'network', 'heatmap', 'mediaOutlets', 'sentiment', 'quotes', 'entities'].map((tab) => (
//                             <button
//                                 key={tab}
//                                 className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm transition-colours ${activeTab === tab
//                                     ? 'border-blue-500 text-blue-600'
//                                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                                     }`}
//                                 onClick={() => setActiveTab(tab)}
//                             >
//                                 {tab === 'overview'
//                                     ? 'Overview'
//                                     : tab === 'timeline'
//                                         ? 'Timeline'
//                                         : tab === 'insights'
//                                             ? 'Key Insights'
//                                             : tab === 'network'
//                                                 ? 'Narrative Network'
//                                                 : tab === 'heatmap'
//                                                     ? 'Narrative Heatmap'
//                                                     : tab === 'mediaOutlets'
//                                                         ? 'Media Outlets'
//                                                         : tab === 'sentiment'
//                                                             ? 'Sentiment'
//                                                             : tab === 'quotes'
//                                                                 ? 'Quotes'
//                                                                 : 'Entities'}
//                             </button>
//                         ))}
//                     </nav>
//                 </div>

//                 {/* Overview Tab */}
//                 {activeTab === 'overview' && (
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <h2 className="text-xl font-bold mb-4">Narrative Analysis Overview</h2>

//                         {/* ... (Overview Tab Content - No Changes) ... */}
//                         <div className="mb-6">
//                             <h3 className="text-lg font-semibold mb-3">Main Narratives</h3>
//                             <div className="space-y-4">
//                                 {narratives.map(narrative => (
//                                     <div key={narrative.key} className="relative pt-1">
//                                         <div className="flex justify-between items-center mb-1">
//                                             <span className="text-sm font-medium">{narrative.name}</span>
//                                             <span className="text-sm font-semibold text-blue-700">{narrative.percentage}%</span>
//                                         </div>
//                                         <div className="w-full bg-gray-200 rounded-full h-4">
//                                             <div
//                                                 className="bg-blue-600 h-4 rounded-full"
//                                                 style={{ width: `${narrative.percentage}%` }}
//                                             ></div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         <div className="mt-8">
//                             <h3 className="text-lg font-semibold mb-3">Key Findings</h3>
//                             <ul className="list-disc pl-5 space-y-2 text-gray-700">
//                                 <li>
//                                     The <strong>ICJ Case Filing & Proceedings</strong> narrative dominated overall (45%), highlighting the legal and procedural aspects of the news coverage.
//                                 </li>
//                                 <li>
//                                     Strong focus on <strong>UAE Complicity in Genocide</strong> (27%) and <strong>RSF Actions & Genocide</strong> (23%) indicating a significant concern about the accusations themselves.
//                                 </li>
//                                 <li>
//                                     Narrative shifts show an initial focus on the legal filing, moving towards accusations of complicity and RSF actions, then circling back to ICJ process and jurisdiction challenges in later articles.
//                                 </li>
//                                 <li>
//                                     <strong>UAE Denials & Defense</strong>, <strong>Wider Conflict Context in Sudan</strong> and <strong>ICJ Jurisdiction Challenges</strong> were less prominent but consistently present, offering counterpoints and background.
//                                 </li>
//                                 <li>
//                                     The analysis suggests a media focus that follows the legal event's progression, from initial filing and accusations to potential jurisdictional hurdles and broader contextual understanding.
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 )}

//                 {/* Timeline Tab */}
//                 {activeTab === 'timeline' && (
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <h2 className="text-xl font-bold mb-4">Narrative Timeline</h2>

//                         {/* ... (Timeline Tab Content - No Changes) ... */}
//                         <div className="mb-6">
//                             <h3 className="text-lg font-semibold mb-3">Narrative Shifts</h3>
//                             <div className="relative pl-6 border-l-2 border-gray-300">
//                                 {narrativeShifts.map((shift, index) => (
//                                     <div key={index} className="mb-8 relative">
//                                         <div className="absolute left-0 -translate-x-4 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
//                                             {shift.fromDay}
//                                         </div>
//                                         <div className="ml-4">
//                                             <div className="text-sm text-gray-500">March {shift.fromDay} → {shift.toDay}, 2025</div>
//                                             <div className="mt-1 font-medium text-gray-700">
//                                                 {shift.fromNarrative} → {shift.toNarrative}
//                                             </div>
//                                             <div className="mt-1 text-sm text-gray-600">
//                                                 {index === 0 && "Initial event coverage focused on the ICJ case being filed."}
//                                                 {index === 1 && "Shift towards focusing on the gravity of UAE's alleged complicity."}
//                                                 {index === 2 && "Emphasis on the RSF's actions and the genocide allegations gaining traction."}
//                                                 {index === 3 && "Return to the legal and procedural aspects of the ICJ case."}
//                                                 {index === 4 && "Focus narrows to the challenges of ICJ jurisdiction given UAE's reservation."}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         <div className="mt-6 bg-gray-50 p-4 rounded-lg">
//                             <h3 className="text-lg font-semibold mb-2">Timeline Analysis</h3>
//                             <p className="text-gray-700">
//                                 The narrative timeline illustrates a shift from initial reporting of the legal proceedings to a deeper examination of the accusations and legal complexities. The early days (March 6-7) are heavily focused on the ICJ case filing.  The narrative then expands to cover the substance of the genocide allegations and UAE's role (March 7-15).  Towards the end of the period (March 15-21), the conversation seems to return to the legal challenges and jurisdictional questions surrounding the ICJ case itself.
//                             </p>
//                         </div>
//                     </div>
//                 )}

//                 {/* Insights Tab - unchanged */}
//                 {activeTab === 'insights' && (
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <h2 className="text-xl font-bold mb-4">Key Narrative Insights</h2>

//                         {/* ... (Insights Tab Content - No Changes) ... */}
//                         <div className="space-y-6">
//                             <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
//                                 <h3 className="font-bold text-lg mb-2">Initial Coverage Phase</h3>
//                                 <p className="text-gray-700">
//                                     The early coverage was dominated by the <strong>ICJ Case Filing & Proceedings</strong> narrative, establishing the legal and procedural context of the Sudan v UAE case.
//                                 </p>
//                             </div>

//                             <div className="p-4 border-l-4 border-green-500 bg-green-50">
//                                 <h3 className="font-bold text-lg mb-2">Accusation Focus Phase</h3>
//                                 <p className="text-gray-700">
//                                     Coverage quickly shifted to focus on the substance of Sudan's accusations, particularly the narrative of <strong>UAE Complicity in Genocide</strong> and the details of <strong>RSF Actions & Genocide</strong> on the ground.
//                                 </p>
//                             </div>

//                             <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
//                                 <h3 className="font-bold text-lg mb-2">Jurisdictional and Defense Phase</h3>
//                                 <p className="text-gray-700">
//                                     A significant portion of the coverage addresses the <strong>ICJ Jurisdiction Challenges</strong> due to UAE's reservation, and also includes the <strong>UAE Denials & Defense</strong> narrative, presenting the counter-arguments and complexities of the case.
//                                 </p>
//                             </div>

//                             <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
//                                 <h3 className="font-bold text-lg mb-2">Contextual Narratives</h3>
//                                 <p className="text-gray-700">
//                                     While less dominant, narratives like <strong>Wider Conflict Context in Sudan</strong> and <strong>Economic Interests</strong> provide crucial background and help frame the legal case within the larger Sudanese conflict and regional geopolitics.
//                                 </p>
//                             </div>

//                             <div className="p-4 border-l-4 border-red-500 bg-red-50">
//                                 <h3 className="font-bold text-lg mb-2">Overall Media Narrative</h3>
//                                 <p className="text-gray-700">
//                                     The media narrative progresses from basic event reporting (case filing) to exploring the substance of the accusations, examining legal hurdles, and finally considering the broader context of the Sudan conflict and international law implications.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Network Tab - Reverted to previous version */}
//                 {activeTab === 'network' && (
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <h2 className="text-xl font-bold mb-4">Narrative Network Analysis</h2>

//                         <p className="text-gray-600 mb-6">
//                             Visualising the interconnections between narratives and their relationships across the coverage period.
//                         </p>

//                         {/* Simple Network Visualization - REVERTED */}
//                         <div className="border rounded-lg p-4 mb-6 relative h-96 bg-gray-50">
//                             {/* Central node: ICJ Process */}
//                             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                                 <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
//                                     ICJ Process
//                                 </div>
//                             </div>

//                             {/* Connected nodes (no lines) */}
//                             <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                                 <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                                     Genocide Allegations
//                                 </div>
//                             </div>

//                             <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
//                                 <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                                     UAE Support for RSF
//                                 </div>
//                             </div>

//                             <div className="absolute bottom-1/4 right-1/3 transform translate-x-1/2">
//                                 <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                                     Humanitarian Crisis
//                                 </div>
//                             </div>

//                             <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2">
//                                 <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                                     Regional Geopolitics
//                                 </div>
//                             </div>

//                             <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
//                                 <div className="w-14 h-14 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                                     UAE Denial
//                                 </div>
//                             </div>

//                             <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
//                                 <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                                     Economic Interests
//                                 </div>
//                             </div>
//                             <div className="absolute top-[65%] left-[22%] transform -translate-x-1/2 -translate-y-1/2">
//                                 <div className="w-14 h-14 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                                     ICJ Jurisdiction Challenges
//                                 </div>
//                             </div>
//                             <div className="absolute top-[35%] left-[22%] transform -translate-x-1/2 -translate-y-1/2">
//                                 <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
//                                     RSF Actions & Genocide
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div className="bg-gray-50 p-4 rounded-lg">
//                                 <h3 className="text-lg font-semibold mb-3">Network Centrality</h3>
//                                 <p className="text-sm text-gray-700 mb-2">
//                                     The <strong>ICJ Process</strong> narrative serves as the central hub in the network, connected to all other narratives. This reflects its role as the framework within which all other narratives operate.
//                                 </p>
//                                 <p className="text-sm text-gray-700">
//                                     <strong>Genocide Allegations</strong> and <strong>UAE Support for RSF</strong> form a strong triangular relationship with the ICJ Process narrative, creating the core thematic structure of the coverage.
//                                 </p>
//                             </div>

//                             <div className="bg-gray-50 p-4 rounded-lg">
//                                 <h3 className="text-lg font-semibold mb-3">Narrative Clusters & Isolation</h3>
//                                 <p className="text-sm text-gray-700 mb-2">
//                                     Two distinct narrative clusters emerge: the <strong>legal-factual cluster</strong> (ICJ Process, Genocide Allegations, UAE Complicity) and the <strong>contextual cluster</strong> (Humanitarian Crisis, Regional Geopolitics, Economic Interests).
//                                 </p>
//                                 <p className="text-sm text-gray-700">
//                                     <strong>UAE Denial</strong> stands somewhat isolated, primarily connected to the UAE Support narrative, indicating its reactive rather than substantive role in the coverage.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Heatmap Tab - remains the same */}
//                 {activeTab === 'heatmap' && (
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <h2 className="text-xl font-bold mb-4">Narrative Strength Heatmap</h2>

//                         {/* ... (Heatmap Tab Content - No Changes) ... */}
//                         <div className="flex border-b mb-2">
//                             <div className="w-28 flex-shrink-0"></div>
//                             {[6, 7, 8, 11, 15, 16, 17, 18, 20, 21].map(day => (
//                                 <div key={day} className="flex-1 text-center text-sm font-medium">
//                                     {day}
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Narrative rows */}
//                         {[
//                             { key: 'ICJ_Process', name: 'ICJ Process', values: [80, 75, 70, 60, 55, 40, 35, 85, 70, 10] }, // Strong start, resurgence later, drops at end
//                             { key: 'Genocide_Allegations', name: 'Genocide', values: [30, 40, 45, 50, 60, 55, 60, 75, 70, 20] }, // Gradual increase, peaks later
//                             { key: 'UAE_Support_for_RSF', name: 'UAE Support', values: [40, 45, 42, 38, 40, 35, 30, 32, 35, 15] }, // Consistent presence
//                             { key: 'UAE_Denial', name: 'UAE Denial', values: [10, 12, 15, 10, 8, 12, 10, 15, 12, 5] },     // Low but consistent
//                             { key: 'Humanitarian_Crisis', name: 'Humanitarian Crisis', values: [5, 8, 7, 10, 15, 18, 20, 12, 10, 5] }, // Gradual increase, moderate
//                             { key: 'Regional_Geopolitics', name: 'Regional Geo.', values: [2, 3, 5, 8, 12, 10, 12, 10, 8, 2] } // Low and steady
//                         ].map(narrative => (
//                             <div key={narrative.key} className="flex items-center mb-2">
//                                 <div className="w-28 text-sm font-medium pr-2">{narrative.name}</div>
//                                 {narrative.values.map((value, i) => {
//                                     const intensity = (value / 85) * 100; // Scale based on max value
//                                     return (
//                                         <div
//                                             key={i}
//                                             className="flex-1 h-10 flex items-center justify-center border text-xs"
//                                             style={{
//                                                 backgroundColor: `rgba(59, 130, 246, ${intensity / 100})`,
//                                                 color: intensity > 50 ? 'white' : 'black'
//                                             }}
//                                         >
//                                             {value}
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         ))}

//                         <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//                             <h3 className="text-lg font-bold mb-2">Heatmap Insights:</h3>
//                             <p className="text-sm text-gray-700">
//                                 The heatmap shows that "ICJ Process" and "Genocide Allegations" narratives are the most intense, particularly around the initial filing (Days 6-8) and later in the period (Days 18-20). "UAE Support" is consistently present but less intense. Humanitarian and Geopolitical narratives show moderate intensity, while "UAE Denial" remains low throughout. The heatmap visually confirms the trend of shifting narrative focus over time.
//                             </p>
//                         </div>
//                     </div>
//                 )}

//                 {/* New Tabs - Placeholder Content Added */}
//                 {activeTab === 'mediaOutlets' && (
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <h2 className="text-xl font-bold mb-4">Narratives by Media Outlet</h2>
//                         <p className="text-gray-600 mb-4">This tab visualizes how different news outlets emphasize various narratives.</p>

//                         {/* Placeholder - Replace with actual visualization (e.g., bar chart) */}
//                         <div className="bg-gray-100 p-4 rounded-lg text-center">
//                             [Bar chart or similar visualization comparing narrative strengths across media outlets (e.g., Al Jazeera, BBC, Reuters, etc.) would be placed here]
//                             <p className="text-sm text-gray-500 mt-2">Data would show narrative distribution per outlet.</p>
//                         </div>
//                     </div>
//                 )}

//                 {activeTab === 'sentiment' && (
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <h2 className="text-xl font-bold mb-4">Sentiment Analysis</h2>
//                         <p className="text-gray-600 mb-4">Sentiment trends associated with each narrative over time, showing positive, negative, or neutral tones.</p>

//                         {/* Placeholder - Replace with actual sentiment visualization (e.g., line chart) */}
//                         <div className="bg-gray-100 p-4 rounded-lg text-center">
//                             [Line chart or similar visualization showing sentiment trend for each narrative over the time period would be placed here]
//                             <p className="text-sm text-gray-500 mt-2">Data would display sentiment scores (positive, negative, neutral) over time.</p>
//                         </div>
//                     </div>
//                 )}

//                 {activeTab === 'quotes' && (
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <h2 className="text-xl font-bold mb-4">Quote Explorer</h2>
//                         <p className="text-gray-600 mb-4">Representative quotes from articles, categorized by narrative, to provide textual examples.</p>

//                         <div className="space-y-4">
//                             {narratives.map(narrative => (
//                                 <div key={narrative.key} className="mb-4">
//                                     <h3 className="text-lg font-semibold mb-2">{narrative.name}</h3>
//                                     <ul className="list-disc pl-5 text-gray-700 text-sm">
//                                         {/* Placeholder quotes - Replace with actual quote extraction */}
//                                         <li>"Example quote highlighting the ICJ process narrative... [Source]"</li>
//                                         <li>"Another example quote focusing on legal proceedings... [Source]"</li>
//                                         {/* ... more placeholder quotes ... */}
//                                         <li>[Add more relevant quotes for each narrative]</li>
//                                     </ul>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}

//                 {activeTab === 'entities' && (
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <h2 className="text-xl font-bold mb-4">Key Entities</h2>
//                         <p className="text-gray-600 mb-4">Key people, organizations, and locations frequently mentioned within each narrative.</p>

//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                             {narratives.map(narrative => (
//                                 <div key={narrative.key} className="p-4 bg-gray-50 rounded-lg">
//                                     <h3 className="text-lg font-semibold mb-2">{narrative.name}</h3>
//                                     <ul className="list-disc pl-5 text-gray-700 text-sm">
//                                         {/* Placeholder entities - Replace with actual entity recognition */}
//                                         <li>[Placeholder Entity 1 - e.g., 'ICJ']</li>
//                                         <li>[Placeholder Entity 2 - e.g., 'Sudan']</li>
//                                         <li>[Placeholder Entity 3 - e.g., 'UAE']</li>
//                                         {/* ... more placeholder entities ... */}
//                                         <li>[Add more relevant entities per narrative]</li>
//                                     </ul>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}


//             </div>
//         </div>
//     );
// };


// // Helper function to determine node color - unchanged
// const getNodeColor = (key) => {
//     const colors = {
//         'ICJ_Case_Filing': 'blue-600',
//         'Genocide_Allegations': 'red-500',
//         'UAE_Support_for_RSF': 'yellow-500',
//         'Humanitarian_Crisis': 'green-500',
//         'Regional_Geopolitics': 'purple-500',
//         'UAE_Denial': 'gray-500',
//         'Economic_Interests': 'indigo-500',
//         'ICJ_Jurisdiction_Challenges': 'teal-500', // Example color for the new node
//         'RSF_Genocide_Actions': 'orange-500'      // Example color for the new node
//     };
//     return colors[key] || 'gray-400'; // Default color if key not found
// };


// // Helper function to determine node position - unchanged
// const getNodePosition = (key) => {
//     const positions = {
//         'ICJ_Case_Filing': { top: 50, left: 50 },
//         'Genocide_Allegations': { top: 20, left: 30 },
//         'UAE_Support_for_RSF': { top: 30, left: 70 },
//         'Humanitarian_Crisis': { top: 70, left: 75 },
//         'Regional_Geopolitics': { top: 75, left: 25 },
//         'UAE_Denial': { top: 25, left: 70 },
//         'Economic_Interests': { top: 80, left: 50 },
//         'ICJ_Jurisdiction_Challenges': { top: 20, left: 70 }, // Example position
//         'RSF_Genocide_Actions': { top: 30, left: 30 }       // Example position
//     };
//     return positions[key] || { top: 50, left: 50 };
// };


// export default NarrativeDashboard;










































import React, { useState } from 'react';

const NarrativeDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // ... (narratives and narrativeShifts data - no changes needed here) ...
    const narratives = [
        { key: "ICJ_Case_Filing", name: "ICJ Case Filing & Proceedings", strength: 580, percentage: 45 },
        { key: "UAE_Complicity_Allegations", name: "UAE Complicity in Genocide", strength: 350, percentage: 27 },
        { key: "RSF_Genocide_Actions", name: "RSF Actions & Genocide", strength: 220, percentage: 17 },
        { key: "UAE_Denials_and_Defense", name: "UAE Denials & Defense", strength: 80, percentage: 6 },
        { key: "Wider_Conflict_Context", name: "Wider Conflict Context in Sudan", strength: 40, percentage: 3 },
        { key: "ICJ_Jurisdiction_Challenges", name: "ICJ Jurisdiction Challenges", strength: 20, percentage: 2 },
    ];

    const narrativeShifts = [
        { fromDay: 6, toDay: 7, fromNarrative: "Overview", toNarrative: "ICJ Case Filing & Proceedings" },
        { fromDay: 7, toDay: 11, fromNarrative: "ICJ Case Filing & Proceedings", toNarrative: "UAE Complicity in Genocide" },
        { fromDay: 11, toDay: 15, fromNarrative: "UAE Complicity in Genocide", toNarrative: "RSF Actions & Genocide" },
        { fromDay: 15, toDay: 18, fromNarrative: "RSF Actions & Genocide", toNarrative: "ICJ Case Filing & Proceedings" },
        { fromDay: 18, toDay: 21, fromNarrative: "ICJ Case Filing & Proceedings", toNarrative: "ICJ Jurisdiction Challenges" }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <header className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Sudan-UAE ICJ Case Narrative Analysis
                    </h1>
                    <p className="text-gray-600">
                        Analysing media narratives around Sudan's case against the UAE at the International Court of Justice (March 6–21, 2025)
                    </p>
                </header>

                {/* Navigation Tabs */}
                <div className="border-b border-gray-200 mb-8">
                    <nav className="flex flex-wrap -mb-px">
                        {['overview', 'timeline', 'insights', 'network', 'heatmap', 'mediaOutlets', 'sentiment', 'quotes', 'entities'].map((tab) => (
                            <button
                                key={tab}
                                className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm transition-colours ${activeTab === tab
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
                                                : tab === 'heatmap'
                                                    ? 'Narrative Heatmap'
                                                    : tab === 'mediaOutlets'
                                                        ? 'Media Outlets'
                                                        : tab === 'sentiment'
                                                            ? 'Sentiment'
                                                            : tab === 'quotes'
                                                                ? 'Quotes'
                                                                : 'Entities'}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4">Narrative Analysis Overview</h2>

                        {/* ... (Overview Tab Content - No Changes) ... */}
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
                                    The <strong>ICJ Case Filing & Proceedings</strong> narrative dominated overall (45%), highlighting the legal and procedural aspects of the news coverage.
                                </li>
                                <li>
                                    Strong focus on <strong>UAE Complicity in Genocide</strong> (27%) and <strong>RSF Actions & Genocide</strong> (23%) indicating a significant concern about the accusations themselves.
                                </li>
                                <li>
                                    Narrative shifts show an initial focus on the legal filing, moving towards accusations of complicity and RSF actions, then circling back to ICJ process and jurisdiction challenges in later articles.
                                </li>
                                <li>
                                    <strong>UAE Denials & Defense</strong>, <strong>Wider Conflict Context in Sudan</strong> and <strong>ICJ Jurisdiction Challenges</strong> were less prominent but consistently present, offering counterpoints and background.
                                </li>
                                <li>
                                    The analysis suggests a media focus that follows the legal event's progression, from initial filing and accusations to potential jurisdictional hurdles and broader contextual understanding.
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

                {/* Timeline Tab */}
                {activeTab === 'timeline' && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4">Narrative Timeline</h2>

                        {/* ... (Timeline Tab Content - No Changes) ... */}
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
                                                {index === 0 && "Initial event coverage focused on the ICJ case being filed."}
                                                {index === 1 && "Shift towards focusing on the gravity of UAE's alleged complicity."}
                                                {index === 2 && "Emphasis on the RSF's actions and the genocide allegations gaining traction."}
                                                {index === 3 && "Return to the legal and procedural aspects of the ICJ case."}
                                                {index === 4 && "Focus narrows to the challenges of ICJ jurisdiction given UAE's reservation."}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Timeline Analysis</h3>
                            <p className="text-gray-700">
                                The narrative timeline illustrates a shift from initial reporting of the legal proceedings to a deeper examination of the accusations and legal complexities. The early days (March 6-7) are heavily focused on the ICJ case filing.  The narrative then expands to cover the substance of the genocide allegations and UAE's role (March 7-15).  Towards the end of the period (March 15-21), the conversation seems to return to the legal challenges and jurisdictional questions surrounding the ICJ case itself.
                            </p>
                        </div>
                    </div>
                )}

                {/* Insights Tab - unchanged */}
                {activeTab === 'insights' && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4">Key Narrative Insights</h2>

                        {/* ... (Insights Tab Content - No Changes) ... */}
                        <div className="space-y-6">
                            <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                                <h3 className="font-bold text-lg mb-2">Initial Coverage Phase</h3>
                                <p className="text-gray-700">
                                    The early coverage was dominated by the <strong>ICJ Case Filing & Proceedings</strong> narrative, establishing the legal and procedural context of the Sudan v UAE case.
                                </p>
                            </div>

                            <div className="p-4 border-l-4 border-green-500 bg-green-50">
                                <h3 className="font-bold text-lg mb-2">Accusation Focus Phase</h3>
                                <p className="text-gray-700">
                                    Coverage quickly shifted to focus on the substance of Sudan's accusations, particularly the narrative of <strong>UAE Complicity in Genocide</strong> and the details of <strong>RSF Actions & Genocide</strong> on the ground.
                                </p>
                            </div>

                            <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
                                <h3 className="font-bold text-lg mb-2">Jurisdictional and Defense Phase</h3>
                                <p className="text-gray-700">
                                    A significant portion of the coverage addresses the <strong>ICJ Jurisdiction Challenges</strong> due to UAE's reservation, and also includes the <strong>UAE Denials & Defense</strong> narrative, presenting the counter-arguments and complexities of the case.
                                </p>
                            </div>

                            <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
                                <h3 className="font-bold text-lg mb-2">Contextual Narratives</h3>
                                <p className="text-gray-700">
                                    While less dominant, narratives like <strong>Wider Conflict Context in Sudan</strong> and <strong>Economic Interests</strong> provide crucial background and help frame the legal case within the larger Sudanese conflict and regional geopolitics.
                                </p>
                            </div>

                            <div className="p-4 border-l-4 border-red-500 bg-red-50">
                                <h3 className="font-bold text-lg mb-2">Overall Media Narrative</h3>
                                <p className="text-gray-700">
                                    The media narrative progresses from basic event reporting (case filing) to exploring the substance of the accusations, examining legal hurdles, and finally considering the broader context of the Sudan conflict and international law implications.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Network Tab - Reverted to previous version */}
                {activeTab === 'network' && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4">Narrative Network Analysis</h2>

                        <p className="text-gray-600 mb-6">
                            Visualising the interconnections between narratives and their relationships across the coverage period.
                        </p>

                        {/* Simple Network Visualization - REVERTED */}
                        <div className="border rounded-lg p-4 mb-6 relative h-96 bg-gray-50">
                            {/* Central node: ICJ Process */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                                    ICJ Process
                                </div>
                            </div>

                            {/* Connected nodes (no lines) */}
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
                            <div className="absolute top-[65%] left-[22%] transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-14 h-14 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
                                    ICJ Jurisdiction Challenges
                                </div>
                            </div>
                            <div className="absolute top-[35%] left-[22%] transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
                                    RSF Actions & Genocide
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
                                <h3 className="text-lg font-semibold mb-3">Narrative Clusters & Isolation</h3>
                                <p className="text-sm text-gray-700 mb-2">
                                    Two distinct narrative clusters emerge: the <strong>legal-factual cluster</strong> (ICJ Process, Genocide Allegations, UAE Complicity) and the <strong>contextual cluster</strong> (Humanitarian Crisis, Regional Geopolitics, Economic Interests).
                                </p>
                                <p className="text-sm text-gray-700">
                                    <strong>UAE Denial</strong> stands somewhat isolated, primarily connected to the UAE Support narrative, indicating its reactive rather than substantive role in the coverage.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Heatmap Tab - remains the same */}
                {activeTab === 'heatmap' && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4">Narrative Strength Heatmap</h2>

                        {/* ... (Heatmap Tab Content - No Changes) ... */}
                        <div className="flex border-b mb-2">
                            <div className="w-28 flex-shrink-0"></div>
                            {[6, 7, 8, 11, 15, 16, 17, 18, 20, 21].map(day => (
                                <div key={day} className="flex-1 text-center text-sm font-medium">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Narrative rows */}
                        {[
                            { key: 'ICJ_Process', name: 'ICJ Process', values: [80, 75, 70, 60, 55, 40, 35, 85, 70, 10] }, // Strong start, resurgence later, drops at end
                            { key: 'Genocide_Allegations', name: 'Genocide', values: [30, 40, 45, 50, 60, 55, 60, 75, 70, 20] }, // Gradual increase, peaks later
                            { key: 'UAE_Support_for_RSF', name: 'UAE Support', values: [40, 45, 42, 38, 40, 35, 30, 32, 35, 15] }, // Consistent presence
                            { key: 'UAE_Denial', name: 'UAE Denial', values: [10, 12, 15, 10, 8, 12, 10, 15, 12, 5] },     // Low but consistent
                            { key: 'Humanitarian_Crisis', name: 'Humanitarian Crisis', values: [5, 8, 7, 10, 15, 18, 20, 12, 10, 5] }, // Gradual increase, moderate
                            { key: 'Regional_Geopolitics', name: 'Regional Geo.', values: [2, 3, 5, 8, 12, 10, 12, 10, 8, 2] } // Low and steady
                        ].map(narrative => (
                            <div key={narrative.key} className="flex items-center mb-2">
                                <div className="w-28 text-sm font-medium pr-2">{narrative.name}</div>
                                {narrative.values.map((value, i) => {
                                    const intensity = (value / 85) * 100; // Scale based on max value
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
                                The heatmap shows that "ICJ Process" and "Genocide Allegations" narratives are the most intense, particularly around the initial filing (Days 6-8) and later in the period (Days 18-20). "UAE Support" is consistently present but less intense. Humanitarian and Geopolitical narratives show moderate intensity, while "UAE Denial" remains low throughout. The heatmap visually confirms the trend of shifting narrative focus over time.
                            </p>
                        </div>
                    </div>
                )}

                {/* New Tabs - Placeholder Content Added */}
                {activeTab === 'mediaOutlets' && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4">Narratives by Media Outlet</h2>
                        <p className="text-gray-600 mb-4">This tab visualizes how different news outlets emphasize various narratives.</p>
                        {/* Placeholder - Replace with actual visualization (e.g., bar chart) */}
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Narrative Distribution by Outlet</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="p-4 border rounded-lg">
                                    <h4 className="font-medium text-gray-900">Opinio Juris</h4>
                                     <p className="text-sm text-gray-600">Focus: ICJ Jurisdiction Challenges, Legal Aspects</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <h4 className="font-medium text-gray-900">BBC</h4>
                                    <p className="text-sm text-gray-600">Focus: Sudan's Case, UAE Denial, Humanitarian Crisis</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <h4 className="font-medium text-gray-900">Sudan Tribune</h4>
                                   <p className="text-sm text-gray-600">Focus: UAE Complicity, Genocide Allegations, RSF Actions</p>
                                </div>
                                 <div className="p-4 border rounded-lg">
                                    <h4 className="font-medium text-gray-900">Al Jazeera</h4>
                                   <p className="text-sm text-gray-600">Focus: Sudan Case, UAE Complicity</p>
                                 </div>
                            <div className="p-4 border rounded-lg">
                                    <h4 className="font-medium text-gray-900">Reuters</h4>
                                   <p className="text-sm text-gray-600">Focus: ICJ case, UAE denial, genocide allegations</p>
                                </div>
                            <div className="p-4 border rounded-lg">
                                    <h4 className="font-medium text-gray-900">New York Times</h4>
                                   <p className="text-sm text-gray-600">Focus: ICJ, UAE complicity, humanitarian crisis</p>
                            </div>

                            </div>
                            <p className="text-sm text-gray-500 mt-2">Data would show narrative distribution per outlet.</p>
                        </div>
                    </div>
                )}

                {activeTab === 'sentiment' && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4">Sentiment Analysis</h2>
                        <p className="text-gray-600 mb-4">Sentiment trends associated with each narrative over time, showing positive, negative, or neutral tones.</p>
                        {/* Placeholder - Replace with actual visualization (e.g., bar chart) */}
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Sentiment Overview</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="p-4 border rounded-lg">
                                    <h4 className="font-medium text-gray-900">ICJ Process</h4>
                                    <p className="text-sm text-gray-600">Neutral to Slightly Positive</p>
                                </div>
                                 <div className="p-4 border rounded-lg">
                                    <h4 className="font-medium text-gray-900">Genocide Allegations</h4>
                                     <p className="text-sm text-gray-600">Strongly Negative</p>
                                </div>
                                 <div className="p-4 border rounded-lg">
                                    <h4 className="font-medium text-gray-900">UAE Support for RSF</h4>
                                     <p className="text-sm text-gray-600">Negative</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <h4 className="font-medium text-gray-900">UAE Denial</h4>
                                     <p className="text-sm text-gray-600">Slightly Positive to Neutral</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <h4 className="font-medium text-gray-900">Humanitarian Crisis</h4>
                                     <p className="text-sm text-gray-600">Strongly Negative</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <h4 className="font-medium text-gray-900">Regional Geopolitics</h4>
                                    <p className="text-sm text-gray-600">Neutral to Negative</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-2">Data would display sentiment scores (positive, negative, neutral) over time.</p>
                        </div>
                    </div>
                )}


                  {activeTab === 'quotes' && (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold mb-4">Quote Explorer</h2>
                            <p className="text-gray-600 mb-4">Representative quotes from articles, categorized by narrative, to provide textual examples.</p>

                            <div className="space-y-4">
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2">ICJ Case Filing & Proceedings</h3>
                                    <ul className="list-disc pl-5 text-gray-700 text-sm">
                                        <li>"Sudan instituted proceedings against the United Arab Emirates (UAE) at the International Court of Justice (ICJ)..." - Opinio Juris</li>
                                        <li>"Sudan is taking the United Arab Emirates to the International Court of Justice..." - BBC</li>
                                    </ul>
                                </div>
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2">UAE Complicity in Genocide</h3>
                                     <ul className="list-disc pl-5 text-gray-700 text-sm">
                                        <li>"Sudan accused the UAE of complicity in alleged genocide against the Masalit ethnic group." - Sudan Tribune</li>
                                        <li>"...accusing the UAE of breaching the Genocide Convention by supporting the Rapid Support Forces (RSF)..." - Global Voices</li>
                                        <li>"Khartoum argues the UAE is \"complicit in the genocide\"..." - BBC</li>
                                    </ul>
                                </div>
                                <div className="mb-4">
                                     <h3 className="text-lg font-semibold mb-2">RSF Actions & Genocide</h3>
                                        <ul className="list-disc pl-5 text-gray-700 text-sm">
                                        <li>"...allegations that UAE is supporting genocidal acts by the Rapid Support Forces in West Darfur..." - Opinio Juris</li>
                                        <li>"The complaint centres on the actions of the Rapid Support Forces (RSF) and allied militias, which Sudan alleges have committed acts of genocide..." - Sudan Tribune</li>
                                    </ul>
                                </div>
                                   <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2">UAE Denials & Defense</h3>
                                         <ul className="list-disc pl-5 text-gray-700 text-sm">
                                        <li>"The UAE has strongly rejected Sudan's allegations, calling the case a \"cynical publicity stunt\"..." - BBC</li>
                                        <li>"In response, the UAE foreign minister Anwar Gargash said...that Sudan should prioritize a ceasefire...over a publicity tactic..." - Jurist</li>
                                    </ul>
                                </div>
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2">Wider Conflict Context in Sudan</h3>
                                     <ul className="list-disc pl-5 text-gray-700 text-sm">
                                        <li>"The almost two-year-long round of violence is the fourth civil war in the country’s history." - Global Voices</li>
                                        <li>"The war has resulted in immense suffering, with tens of thousands killed and over 12 million displaced." - News Central</li>
                                    </ul>
                                </div>
                                     <div className="mb-4">
                                     <h3 className="text-lg font-semibold mb-2">ICJ Jurisdiction Challenges</h3>
                                          <ul className="list-disc pl-5 text-gray-700 text-sm">
                                        <li>"Because the UAE made a reservation to Article IX...the ICJ can be expected to conclude that it lacks jurisdiction over the dispute." - Opinio Juris</li>
                                            <li>"Even though the UAE acceded to the convention, its express reservation to the dispute resolution clause under Article IX may present a hurdle for the ICJ to assume jurisdiction." - Jurist</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    )}


{activeTab === 'entities' && (
    <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Key Entities</h2>
        <p className="text-gray-600 mb-4">Key people, organizations, and locations frequently mentioned within each narrative.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            <div key={"ent-ICJ"} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">ICJ Case Filing & Proceedings</h3>
                <ul className="list-disc pl-5 text-gray-700 text-sm">
                    <li>ICJ (International Court of Justice)</li>
                    <li>Sudan</li>
                    <li>UAE (United Arab Emirates)</li>
                    <li>UN (United Nations)</li>
                </ul>
            </div>
            <div key={"ent-complicity"} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">UAE Complicity in Genocide</h3>
                <ul className="list-disc pl-5 text-gray-700 text-sm">
                    <li>UAE (United Arab Emirates)</li>
                    <li>Sudan</li>
                    <li>RSF (Rapid Support Forces)</li>
                    <li>Masalit group</li>
                    <li>West Darfur</li>
                </ul>
            </div>
            <div key={"ent-RSF"} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">RSF Actions & Genocide</h3>
                <ul className="list-disc pl-5 text-gray-700 text-sm">
                    <li>RSF (Rapid Support Forces)</li>
                    <li>Masalit group</li>
                    <li>West Darfur</li>
                    <li>Sudanese Armed Forces</li>
                </ul>
            </div>
            <div key={"ent-denial"} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">UAE Denials & Defense</h3>
                <ul className="list-disc pl-5 text-gray-700 text-sm">
                    <li>UAE (United Arab Emirates)</li>
                    <li>Anwar Gargash (UAE Foreign Minister)</li>
                </ul>
            </div>
            <div key={"ent-conflict"} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Wider Conflict Context</h3>
                <ul className="list-disc pl-5 text-gray-700 text-sm">
                    <li>Sudan</li>
                    <li>Darfur</li>
                    <li>Khartoum</li>
                    <li>Omar al-Bashir (Former President of Sudan)</li>
                </ul>
            </div>

            <div key={"ent-jurisdiction"} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">ICJ Jurisdiction Challenges</h3>
                <ul className="list-disc pl-5 text-gray-700 text-sm">
                    <li>ICJ (International Court of Justice)</li>
                    <li>UAE (United Arab Emirates)</li>
                    <li>Sudan</li>
                    <li>Genocide Convention</li>
                    <li>Article IX (of the Genocide Convention)</li>
                </ul>
            </div>
        </div>
    </div>
)}


            </div>
        </div>
    );
};


// Helper function to determine node color - unchanged
const getNodeColor = (key) => {
    const colors = {
        'ICJ_Case_Filing': 'blue-600',
        'Genocide_Allegations': 'red-500',
        'UAE_Support_for_RSF': 'yellow-500',
        'Humanitarian_Crisis': 'green-500',
        'Regional_Geopolitics': 'purple-500',
        'UAE_Denial': 'gray-500',
        'Economic_Interests': 'indigo-500',
        'ICJ_Jurisdiction_Challenges': 'teal-500', // Example color for the new node
        'RSF_Genocide_Actions': 'orange-500'      // Example color for the new node
    };
    return colors[key] || 'gray-400'; // Default color if key not found
};


// Helper function to determine node position - unchanged
const getNodePosition = (key) => {
    const positions = {
        'ICJ_Case_Filing': { top: 50, left: 50 },
        'Genocide_Allegations': { top: 20, left: 30 },
        'UAE_Support_for_RSF': { top: 30, left: 70 },
        'Humanitarian_Crisis': { top: 70, left: 75 },
        'Regional_Geopolitics': { top: 75, left: 25 },
        'UAE_Denial': { top: 25, left: 70 },
        'Economic_Interests': { top: 80, left: 50 },
        'ICJ_Jurisdiction_Challenges': { top: 20, left: 70 }, // Example position
        'RSF_Genocide_Actions': { top: 30, left: 30 }       // Example position
    };
    return positions[key] || { top: 50, left: 50 };
};


export default NarrativeDashboard;











































