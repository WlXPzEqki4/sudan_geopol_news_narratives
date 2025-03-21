// import React, { useState, useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const ThematicNetworkAnalysis = () => {
//   const [activeView, setActiveView] = useState('thematicAnalysis');
//   const [selectedTheme, setSelectedTheme] = useState(null);
//   const [selectedArticle, setSelectedArticle] = useState(null);
//   const [graphData, setGraphData] = useState(null);
//   const [transform, setTransform] = useState({ x: 0, y: 0, k: 1 });
  
//   const networkRef = useRef(null);
//   const svgRef = useRef(null);
  
//   // Sample articles with thematic tagging
//   const articleData = [
//     {
//       id: 1,
//       title: "Sudan files case against UAE at top UN court over 'complicity in genocide'",
//       source: "Al Jazeera",
//       date: "2025-03-06",
//       url: "https://www.aljazeera.com/news/2025/3/6/sudan-files-case-against-uae-at-top-un-court-over-complicity-in-genocide",
//       summary: "Sudan files a case against the UAE at the ICJ, accusing it of supporting the RSF which is implicated in genocide against the Masalit people.",
//       themes: ["ICJ Filing", "Genocide Allegations", "UAE Support for RSF"],
//       quotes: [
//         "In its application to the ICJ, also known as the World Court, Sudan said it was seeking to 'obtain redress for the UAE's violations of Sudan's sovereignty, its interference in Sudan's internal affairs, and its use of force against the Sudanese people'.",
//         "The Sudanese Ministry of Foreign Affairs said in a statement on Wednesday that it had presented evidence that the UAE provided weapons and financial and political support to the RSF."
//       ]
//     },
//     {
//       id: 5,
//       title: "Sudan Takes UAE to World Court Over Alleged Complicity in Genocide",
//       source: "Religion Unplugged",
//       date: "2025-03-11",
//       url: "https://religionunplugged.com/news/2025/3/11/sudan-takes-uae-to-world-court-over-alleged-complicity-in-genocide",
//       summary: "Sudan files case against UAE at ICJ, focusing on atrocities against the Masalit group in West Darfur.",
//       themes: ["Genocide Allegations", "Masalit Targeting", "ICJ Jurisdiction"],
//       quotes: [
//         "In their application to the ICJ, Sudan seeks redress for the UAE's actions and asserts that the UAE has breached its obligations under international law, including the UN Charter, the Genocide Convention, and the International Covenant on Civil and Political Rights.",
//         "The ministry stated that the UAE has violated Sudan's sovereignty and interfered in its internal affairs through its support of the RSF."
//       ]
//     },
//     {
//       id: 12,
//       title: "What is the UAE's involvement in war-torn Sudan?",
//       source: "France 24",
//       date: "2025-03-08",
//       url: "https://www.france24.com/en/live-news/20250308-what-is-the-uae-s-involvement-in-war-torn-sudan",
//       summary: "Analysis of UAE's alleged involvement in Sudan conflict, examining weapons supply and strategic interests.",
//       themes: ["UAE Support for RSF", "Weapons Supply", "Regional Geopolitics"],
//       quotes: [
//         "Since fighting broke out in April 2024 between the Sudanese army and the RSF, the UAE has officially maintained a neutral stance, calling for a peaceful resolution to the conflict. However, several reports and investigations have suggested that the UAE has been providing support to the RSF.",
//         "The UAE's alleged support for the RSF has drawn criticism from human rights groups and international organizations. They accuse the UAE of fueling the conflict and contributing to the suffering of the Sudanese people."
//       ]
//     },
//     {
//       id: 14,
//       title: "Sudan Takes UAE To World Court Over Alleged Complicity In Genocide",
//       source: "Forbes",
//       date: "2025-03-09",
//       url: "https://www.forbes.com/sites/ewelinaochab/2025/03/09/sudan-takes-uae-to-world-court-over-alleged-complicity-in-genocide/",
//       summary: "Legal analysis of Sudan's ICJ filing against UAE under the Genocide Convention.",
//       themes: ["ICJ Process", "Genocide Convention", "Legal Precedent"],
//       quotes: [
//         "In its Application instituting proceedings before the ICJ, Sudan stated that it 'seeks to obtain redress for the UAE's violations of Sudan's sovereignty, its interference in Sudan's internal affairs, and its use of force against the Sudanese people.'",
//         "The Application also stated that '[t]hrough its actions, the UAE has prolonged and intensified the conflict, resulting in the widespread destruction of infrastructure, countless civilian casualties, and a grave humanitarian crisis.'"
//       ]
//     },
//     {
//       id: 24,
//       title: "Art. IX Reservations to the Genocide Convention Are Here to Stay? A Response to Diamond",
//       source: "Opinio Juris",
//       date: "2025-03-14",
//       url: "https://opiniojuris.org/2025/03/14/art-ix-reservations-to-the-genocide-convention-are-here-to-stay-a-response-to-diamond/",
//       summary: "Analysis of UAE's reservation to Article IX of the Genocide Convention and implications for ICJ jurisdiction.",
//       themes: ["ICJ Jurisdiction", "Genocide Convention", "Legal Analysis"],
//       quotes: [
//         "Diamond argues that these reservations are incompatible with the object and purpose of the Genocide Convention, and therefore impermissible under Article 19(c) of the Vienna Convention on the Law of Treaties (VCLT).",
//         "With all due respect, I disagree. In my view, reservations to Article IX should be considered permissible because they do not frustrate the object and purpose of the Genocide Convention."
//       ]
//     },
//     {
//       id: 30,
//       title: "Could Sudan be split into two countries?",
//       source: "Deutsche Welle",
//       date: "2025-03-15",
//       url: "https://www.dw.com/en/could-sudan-be-split-into-two-countries/a-71923002",
//       summary: "Analysis of potential partition of Sudan amid ongoing civil conflict between SAF and RSF.",
//       themes: ["Humanitarian Crisis", "Regional Geopolitics", "Territorial Control"],
//       quotes: [
//         "The ongoing civil war in Sudan between the Sudanese Armed Forces (SAF) and the Rapid Support Forces (RSF) has raised concerns about the potential partition of the country.",
//         "The conflict has resulted in over 14 million displaced individuals and severe food shortages, with parts of the country facing famine. The humanitarian situation continues to deteriorate amid ongoing violence."
//       ]
//     },
//     {
//       id: 38,
//       title: "Sudan's war: What's driving UAE and Saudi Arabia interests?",
//       source: "Nation Africa",
//       date: "2025-03-16",
//       url: "https://nation.africa/kenya/news/africa/sudan-s-war-what-s-driving-uae-and-saudi-arabia-interests--4966818",
//       summary: "Analysis of UAE's economic interests in Sudan, particularly gold mining and agricultural investments.",
//       themes: ["Economic Interests", "Gold Trade", "Regional Geopolitics"],
//       quotes: [
//         "The UAE invested in the agricultural sector, acquiring large tracts of land to ensure food security.",
//         "The UAE also invested in the gold sector. Gold has been one of the main drivers of the Sudan conflict. It allows both parties to fuel their war machines. The UAE is the main beneficiary of this trade. It receives nearly all the gold smuggled from Sudan and has become a hub for laundering trafficked gold into the global market."
//       ]
//     },
//     {
//       id: 39,
//       title: "UAE-Backed RSF Militia's Genocide Against the Masalit Tribe in Darfur",
//       source: "Al-Estiklal",
//       date: "2025-03-16",
//       url: "https://www.alestiklal.net/en/article/uae-backed-rsf-militia-s-genocide-against-the-masalit-tribe-in-darfur",
//       summary: "Detailed report on alleged genocide against Masalit tribe by RSF with UAE support.",
//       themes: ["Genocide Allegations", "Masalit Targeting", "UAE Support for RSF"],
//       quotes: [
//         "Massacres are not new in Sudan, where the ongoing civil war between the military and the Emirati-backed RSF militia has claimed the lives of thousands of civilians.",
//         "However, a particularly tragic chapter is unfolding in Darfur, where the Masalit tribe faced a genocide in 2023."
//       ]
//     }
//   ];
  
//   // Define themes with sub-themes and connections
//   const themeData = {
//     "Legal Process": {
//       key: "legal-process",
//       description: "Coverage focused on legal procedures, ICJ processes, and jurisdictional questions",
//       subThemes: ["ICJ Filing", "ICJ Jurisdiction", "Genocide Convention", "Legal Analysis", "Legal Precedent"],
//       articles: [1, 5, 14, 24],
//       connections: ["Genocide Allegations", "UAE Support for RSF"],
//       textEvidence: [
//         "In its application to the ICJ, also known as the World Court, Sudan said...",
//         "The case pertains to alleged violations under the Convention on the Prevention and Punishment of the Crime of Genocide",
//         "The ICJ has the authority to issue binding rulings on disputes between states, but its decisions are not always enforced"
//       ]
//     },
//     "Genocide Allegations": {
//       key: "genocide-allegations",
//       description: "Coverage of alleged genocide against the Masalit people and other atrocities in Darfur",
//       subThemes: ["Masalit Targeting", "West Darfur Atrocities", "RSF Atrocities"],
//       articles: [1, 5, 39],
//       connections: ["Legal Process", "UAE Support for RSF", "Humanitarian Crisis"],
//       textEvidence: [
//         "A particularly tragic chapter is unfolding in Darfur, where the Masalit tribe faced a genocide in 2023",
//         "Harrowing testimonies and reports have emerged, accusing the RSF militia, with alleged Emirati backing, of killing, burning, and raping members of the tribe",
//         "The Sudanese government has officially filed a case before the International Court of Justice (ICJ), accusing the United Arab Emirates (UAE) of supporting the Rapid Support Forces (RSF) in what it describes as a genocidal campaign in Darfur"
//       ]
//     },
//     "UAE Support for RSF": {
//       key: "uae-support",
//       description: "Allegations of UAE providing weapons, financial and political support to the RSF",
//       subThemes: ["Weapons Supply", "Financial Support", "Military Training"],
//       articles: [1, 12, 39],
//       connections: ["Genocide Allegations", "Legal Process", "Economic Interests"],
//       textEvidence: [
//         "Sudan accuses the UAE of providing the RSF with weapons, training and financial assistance, which it says has enabled the paramilitary group to carry out its attacks",
//         "Several reports and investigations have suggested that the UAE has been providing support to the RSF",
//         "The Sudanese Ministry of Foreign Affairs said in a statement on Wednesday that it had presented evidence that the UAE provided weapons and financial and political support to the RSF"
//       ]
//     },
//     "Humanitarian Crisis": {
//       key: "humanitarian-crisis",
//       description: "Coverage of civilian casualties, displacement, and humanitarian impacts of the conflict",
//       subThemes: ["Civilian Casualties", "Displaced Persons", "Humanitarian Aid", "Famine Risk"],
//       articles: [30],
//       connections: ["Genocide Allegations", "Regional Geopolitics"],
//       textEvidence: [
//         "The conflict has resulted in over 14 million displaced individuals and severe food shortages, with parts of the country facing famine",
//         "The humanitarian situation continues to deteriorate amid ongoing violence",
//         "The UN has warned that the conflict could plunge the country into a catastrophic hunger crisis"
//       ]
//     },
//     "Economic Interests": {
//       key: "economic-interests",
//       description: "Focus on economic motivations and resource control as drivers of the conflict",
//       subThemes: ["Gold Trade", "Agricultural Land", "Resource Control"],
//       articles: [38],
//       connections: ["UAE Support for RSF", "Regional Geopolitics"],
//       textEvidence: [
//         "The UAE also invested in the gold sector. Gold has been one of the main drivers of the Sudan conflict",
//         "The UAE is the main beneficiary of this trade. It receives nearly all the gold smuggled from Sudan and has become a hub for laundering trafficked gold into the global market",
//         "The UAE invested in the agricultural sector, acquiring large tracts of land to ensure food security"
//       ]
//     },
//     "Regional Geopolitics": {
//       key: "regional-geopolitics",
//       description: "Analysis of broader regional implications and strategic interests at play",
//       subThemes: ["Power Dynamics", "Regional Influence", "Strategic Interests", "Territorial Control"],
//       articles: [12, 30, 38],
//       connections: ["Humanitarian Crisis", "Economic Interests", "UAE Support for RSF"],
//       textEvidence: [
//         "Some analysts say that the UAE's support for the RSF is aimed at undermining the Sudanese government and gaining influence in the country",
//         "The ongoing civil war in Sudan between the Sudanese Armed Forces (SAF) and the Rapid Support Forces (RSF) has raised concerns about the potential partition of the country",
//         "Both countries have multiple interests in Sudan. These include economic interests, geopolitical interests, and security interests"
//       ]
//     }
//   };
  
//   // Process theme data for network visualization
//   useEffect(() => {
//     const nodes = [];
//     const links = [];
    
//     // Add main theme nodes
//     Object.entries(themeData).forEach(([name, theme], i) => {
//       nodes.push({
//         id: theme.key,
//         name: name,
//         type: 'theme',
//         radius: 25,
//         articles: theme.articles,
//         description: theme.description
//       });
      
//       // Add connections between themes
//       theme.connections.forEach(connectedTheme => {
//         const connectedKey = themeData[connectedTheme]?.key;
//         if (connectedKey) {
//           links.push({
//             source: theme.key,
//             target: connectedKey,
//             strength: 0.7,
//             type: 'theme-theme'
//           });
//         }
//       });
      
//       // Add subtheme nodes and connections
//       theme.subThemes.forEach(subTheme => {
//         const subThemeId = `${theme.key}-${subTheme.toLowerCase().replace(/\s+/g, '-')}`;
//         nodes.push({
//           id: subThemeId,
//           name: subTheme,
//           type: 'subtheme',
//           parent: theme.key,
//           radius: 15,
//           description: `Subtheme of ${name}`
//         });
        
//         links.push({
//           source: theme.key,
//           target: subThemeId,
//           strength: 0.9,
//           type: 'theme-subtheme'
//         });
//       });
      
//       // Add article nodes and connections
//       theme.articles.forEach(articleId => {
//         const article = articleData.find(a => a.id === articleId);
//         if (article) {
//           // Only add article node if it doesn't exist yet
//           if (!nodes.some(n => n.id === `article-${article.id}`)) {
//             nodes.push({
//               id: `article-${article.id}`,
//               name: article.title,
//               type: 'article',
//               source: article.source,
//               date: article.date,
//               radius: 10,
//               data: article
//             });
//           }
          
//           links.push({
//             source: theme.key,
//             target: `article-${article.id}`,
//             strength: 0.5,
//             type: 'theme-article'
//           });
//         }
//       });
//     });
    
//     setGraphData({ nodes, links });
//   }, []);
  
//   // Initialize and update the network visualization
//   useEffect(() => {
//     if (!graphData || !svgRef.current) return;
    
//     // Clear any existing SVG content
//     d3.select(svgRef.current).selectAll("*").remove();
    
//     // Get SVG dimensions
//     const width = svgRef.current.clientWidth;
//     const height = svgRef.current.clientHeight;
    
//     // Create SVG
//     const svg = d3.select(svgRef.current)
//       .attr("width", width)
//       .attr("height", height);
    
//     // Create container for zoom/pan
//     const container = svg.append("g")
//       .attr("class", "container");
    
//     // Add zoom behavior
//     const zoom = d3.zoom()
//       .scaleExtent([0.1, 4])
//       .on("zoom", (event) => {
//         container.attr("transform", event.transform);
//         setTransform({
//           x: event.transform.x,
//           y: event.transform.y,
//           k: event.transform.k
//         });
//       });
    
//     svg.call(zoom);
    
//     // Initialize with a slight zoom out to show more of the network
//     svg.call(zoom.transform, d3.zoomIdentity.translate(width/3, height/3).scale(0.8));
    
//     // Define color scale for nodes
//     const colorScale = d3.scaleOrdinal()
//       .domain(['theme', 'subtheme', 'article'])
//       .range(['#3b82f6', '#10b981', '#f59e0b']);
    
//     // Create simulation
//     const simulation = d3.forceSimulation(graphData.nodes)
//       .force("link", d3.forceLink(graphData.links)
//         .id(d => d.id)
//         .distance(d => {
//           if (d.type === 'theme-subtheme') return 60;
//           if (d.type === 'theme-article') return 100;
//           return 150; // theme-theme connections
//         })
//         .strength(d => d.strength))
//       .force("charge", d3.forceManyBody().strength(-300))
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .force("collision", d3.forceCollide().radius(d => d.radius * 1.5));
    
//     // Create links
//     const link = container.append("g")
//       .attr("class", "links")
//       .selectAll("line")
//       .data(graphData.links)
//       .enter().append("line")
//       .attr("stroke-width", d => {
//         if (d.type === 'theme-theme') return 3;
//         if (d.type === 'theme-subtheme') return 2;
//         return 1;
//       })
//       .attr("stroke", d => {
//         if (d.type === 'theme-theme') return "#6b7280";
//         if (d.type === 'theme-subtheme') return "#93c5fd";
//         return "#d1d5db";
//       })
//       .attr("stroke-opacity", 0.6)
//       .attr("stroke-dasharray", d => d.type === 'theme-article' ? "3,3" : null);
    
//     // Create node groups
//     const node = container.append("g")
//       .attr("class", "nodes")
//       .selectAll(".node")
//       .data(graphData.nodes)
//       .enter().append("g")
//       .attr("class", "node")
//       .call(d3.drag()
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended));
    
//     // Add circles for nodes
//     node.append("circle")
//       .attr("r", d => d.radius)
//       .attr("fill", d => colorScale(d.type))
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 1.5)
//       .on("click", (event, d) => {
//         // Handle node click
//         if (d.type === 'theme') {
//           setSelectedTheme(d.name);
//           setSelectedArticle(null);
//         } else if (d.type === 'article') {
//           setSelectedArticle(d.data);
//           setSelectedTheme(null);
//         }
//       });
    
//     // Add text labels
//     node.append("text")
//       .attr("dy", d => {
//         return d.type === 'theme' ? -30 : -15;
//       })
//       .attr("text-anchor", "middle")
//       .attr("font-size", d => {
//         if (d.type === 'theme') return "12px";
//         if (d.type === 'subtheme') return "10px";
//         return "8px";
//       })
//       .attr("font-weight", d => d.type === 'theme' ? "bold" : "normal")
//       .text(d => {
//         if (d.type === 'article') {
//           return `${d.source} (${d.date.split('-')[2]}/${d.date.split('-')[1]})`;
//         }
//         return d.name;
//       })
//       .each(function(d) {
//         if (d.type === 'article') {
//           // For articles, add a second line with truncated title
//           const title = d.name.length > 25 
//             ? d.name.substring(0, 22) + '...' 
//             : d.name;
          
//           d3.select(this.parentNode)
//             .append("text")
//             .attr("dy", -5)
//             .attr("text-anchor", "middle")
//             .attr("font-size", "8px")
//             .text(title);
//         }
//       });
    
//     // Update node and link positions during simulation
//     simulation.on("tick", () => {
//       link
//         .attr("x1", d => d.source.x)
//         .attr("y1", d => d.source.y)
//         .attr("x2", d => d.target.x)
//         .attr("y2", d => d.target.y);
      
//       node
//         .attr("transform", d => `translate(${d.x}, ${d.y})`);
//     });
    
//     // Drag functions
//     function dragstarted(event, d) {
//       if (!event.active) simulation.alphaTarget(0.3).restart();
//       d.fx = d.x;
//       d.fy = d.y;
//     }
    
//     function dragged(event, d) {
//       d.fx = event.x;
//       d.fy = event.y;
//     }
    
//     function dragended(event, d) {
//       if (!event.active) simulation.alphaTarget(0);
//       d.fx = null;
//       d.fy = null;
//     }
    
//     // Add legend
//     const legend = svg.append("g")
//       .attr("transform", `translate(20, ${height - 80})`);
    
//     const legendItems = [
//       { type: 'theme', label: 'Main Theme' },
//       { type: 'subtheme', label: 'Sub-Theme' },
//       { type: 'article', label: 'Article' }
//     ];
    
//     legendItems.forEach((item, i) => {
//       const legendItem = legend.append("g")
//         .attr("transform", `translate(0, ${i * 20})`);
      
//       legendItem.append("circle")
//         .attr("r", item.type === 'theme' ? 8 : item.type === 'subtheme' ? 6 : 4)
//         .attr("fill", colorScale(item.type));
      
//       legendItem.append("text")
//         .attr("x", 15)
//         .attr("y", 4)
//         .attr("font-size", "10px")
//         .text(item.label);
//     });
    
//     // Return cleanup function
//     return () => {
//       simulation.stop();
//     };
//   }, [graphData]);
  
//   // Get articles for a specific theme
//   const getArticlesForTheme = (themeName) => {
//     const theme = themeData[themeName];
//     if (!theme) return [];
    
//     return theme.articles.map(id => 
//       articleData.find(article => article.id === id)
//     ).filter(Boolean);
//   };
  
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 max-w-7xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Thematic Network Analysis</h2>
      
//       {/* View Selector */}
//       <div className="mb-6 border-b flex">
//         <button 
//           className={`pb-3 px-4 ${activeView === 'thematicAnalysis' ? 'border-b-2 border-blue-500 text-blue-600 font-medium' : 'text-gray-500'}`}
//           onClick={() => setActiveView('thematicAnalysis')}
//         >
//           Thematic Analysis
//         </button>
//         <button 
//           className={`pb-3 px-4 ${activeView === 'networkGraph' ? 'border-b-2 border-blue-500 text-blue-600 font-medium' : 'text-gray-500'}`}
//           onClick={() => setActiveView('networkGraph')}
//         >
//           Interactive Network Graph
//         </button>
//       </div>
      
//       {/* Thematic Analysis View */}
//       {activeView === 'thematicAnalysis' && (
//         <div>
//           <p className="text-gray-600 mb-6">
//             Analysis of key themes in the Sudan-UAE ICJ case coverage, with evidence traced to specific articles.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             {Object.entries(themeData).map(([name, theme]) => (
//               <div 
//                 key={theme.key} 
//                 className={`border rounded-lg p-4 cursor-pointer transition hover:shadow-md ${
//                   selectedTheme === name ? 'ring-2 ring-blue-500 bg-blue-50' : ''
//                 }`}
//                 onClick={() => setSelectedTheme(name === selectedTheme ? null : name)}
//               >
//                 <h3 className="font-semibold text-lg mb-1">{name}</h3>
//                 <p className="text-sm text-gray-600 mb-2">{theme.description}</p>
//                 <div className="flex flex-wrap gap-1 mb-2">
//                   {theme.subThemes.map(subTheme => (
//                     <span key={subTheme} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
//                       {subTheme}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="text-xs text-gray-500">
//                   {theme.articles.length} articles | {theme.connections.length} connections
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {selectedTheme && (
//             <div className="border rounded-lg p-4 mb-6 bg-gray-50">
//               <h3 className="text-xl font-semibold mb-3">{selectedTheme}</h3>
//               <p className="text-gray-700 mb-4">{themeData[selectedTheme].description}</p>
              
//               <div className="mb-4">
//                 <h4 className="font-medium mb-2">Key Evidence:</h4>
//                 <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
//                   {themeData[selectedTheme].textEvidence.map((evidence, i) => (
//                     <li key={i}>{evidence}</li>
//                   ))}
//                 </ul>
//               </div>
              
//               <div className="mb-4">
//                 <h4 className="font-medium mb-2">Related Themes:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {themeData[selectedTheme].connections.map(connectedTheme => (
//                     <span 
//                       key={connectedTheme}
//                       className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded cursor-pointer"
//                       onClick={() => setSelectedTheme(connectedTheme)}
//                     >
//                       {connectedTheme}
//                     </span>
//                   ))}
//                 </div>
//               </div>
              
//               <div>
//                 <h4 className="font-medium mb-2">Articles with this Theme:</h4>
//                 <div className="space-y-3">
//                   {getArticlesForTheme(selectedTheme).map(article => (
//                     <div 
//                       key={article.id}
//                       className="border p-3 rounded bg-white cursor-pointer hover:bg-blue-50"
//                       onClick={() => setSelectedArticle(article)}
//                     >
//                       <div className="flex justify-between items-start">
//                         <h5 className="font-medium text-sm">{article.title}</h5>
//                         <span className="text-xs text-gray-500">{article.date.split('-')[2]}/{article.date.split('-')[1]}</span>
//                       </div>
//                       <div className="text-xs text-gray-600 mt-1">{article.source}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
          
//           {selectedArticle && (
//             <div className="border rounded-lg p-4 mb-6 bg-white">
//               <div className="flex justify-between items-start mb-3">
//                 <h3 className="text-xl font-semibold">{selectedArticle.title}</h3>
//                 <button 
//                   className="text-gray-400 hover:text-gray-600"
//                   onClick={() => setSelectedArticle(null)}
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//               </div>
              
//               <div className="text-sm text-gray-600 mb-4">
//                 {selectedArticle.source} | {selectedArticle.date}
//               </div>
              
//               <div className="mb-4">
//                 <h4 className="font-medium mb-2">Summary:</h4>
//                 <p className="text-gray-700">{selectedArticle.summary}</p>
//               </div>
              
//               <div className="mb-4">
//                 <h4 className="font-medium mb-2">Themes:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {selectedArticle.themes.map(theme => (
//                     <span 
//                       key={theme}
//                       className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded"
//                     >
//                       {theme}
//                     </span>
//                   ))}
//                 </div>
//               </div>
              
//               <div>
//                 <h4 className="font-medium mb-2">Key Quotes:</h4>
//                 <div className="space-y-2">
//                   {selectedArticle.quotes.map((quote, index) => (
//                     <div key={index} className="bg-gray-50 p-3 border-l-4 border-gray-300 text-sm italic">
//                       "{quote}"
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="mt-4 text-sm">
//                 <a 
//                   href={selectedArticle.url} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline"
//                 >
//                   View original article
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
      
//       {/* Network Graph View */}
//       {activeView === 'networkGraph' && (
//         <div>
//           <p className="text-gray-600 mb-4">
//             Interactive visualization of themes, subthemes, and articles. Drag nodes to reposition, scroll to zoom, and click nodes for details.
//           </p>
          
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className="md:w-2/3">
//               <div 
//                 ref={networkRef} 
//                 className="border rounded-lg bg-gray-50 h-[600px] relative"
//               >
//                 <svg 
//                   ref={svgRef} 
//                   className="w-full h-full"
//                   style={{ background: '#f9fafb' }}
//                 ></svg>
                
//                 <div className="absolute bottom-4 right-4 bg-white p-2 rounded shadow-sm text-xs flex items-center space-x-3">
//                   <button 
//                     className="px-2 py-1 bg-blue-100 text-blue-800 rounded"
//                     onClick={() => {
//                       const svg = d3.select(svgRef.current);
//                       svg.call(d3.zoom().transform, d3.zoomIdentity.translate(
//                         svgRef.current.clientWidth/3, 
//                         svgRef.current.clientHeight/3
//                       ).scale(0.8));
//                     }}
//                   >
//                     Reset View
//                   </button>
//                   <div>Zoom: {Math.round(transform.k * 100)}%</div>
//                 </div>
                
//                 <div className="absolute top-4 left-4 bg-white p-2 rounded shadow-md text-xs max-w-xs">
//                   <p className="font-medium text-sm mb-1">Network Insights:</p>
//                   <ul className="list-disc pl-4 space-y-1">
//                     <li>Central themes (larger nodes) show main narratives</li>
//                     <li>Connected subthemes reveal component narratives</li>
//                     <li>Solid lines show strong thematic connections</li>
//                     <li>Dashed lines connect themes to source articles</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
            
//             <div className="md:w-1/3">
//               <div className="border rounded-lg p-4 h-full flex flex-col">
//                 <h3 className="text-lg font-semibold mb-3">Node Details</h3>
                
//                 {!selectedTheme && !selectedArticle ? (
//                   <div className="flex-1 flex items-center justify-center p-6 text-center text-gray-500">
//                     <p>Click on a node in the network graph to view details</p>
//                   </div>
//                 ) : selectedTheme ? (
//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="font-medium">{selectedTheme}</h4>
//                       <p className="text-sm text-gray-600 mt-1">{themeData[selectedTheme].description}</p>
//                     </div>
                    
//                     <div>
//                       <h5 className="text-sm font-medium text-gray-700">Sub-Themes:</h5>
//                       <div className="flex flex-wrap gap-1 mt-1">
//                         {themeData[selectedTheme].subThemes.map(subTheme => (
//                           <span key={subTheme} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
//                             {subTheme}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
                    
//                     <div>
//                       <h5 className="text-sm font-medium text-gray-700">Related Themes:</h5>
//                       <div className="flex flex-wrap gap-1 mt-1">
//                         {themeData[selectedTheme].connections.map(theme => (
//                           <span key={theme} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
//                             {theme}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
                    
//                     <div>
//                       <h5 className="text-sm font-medium text-gray-700">Related Articles:</h5>
//                       <ul className="text-sm space-y-1 mt-1">
//                         {getArticlesForTheme(selectedTheme).map(article => (
//                           <li key={article.id} className="truncate">
//                             <button 
//                               className="text-blue-600 hover:underline text-left truncate w-full text-xs"
//                               onClick={() => setSelectedArticle(article)}
//                             >
//                               {article.source}: {article.title}
//                             </button>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="font-medium truncate">{selectedArticle.title}</h4>
//                       <p className="text-sm text-gray-600 mt-1">{selectedArticle.source} | {selectedArticle.date}</p>
//                     </div>
                    
//                     <div>
//                       <h5 className="text-sm font-medium text-gray-700">Themes:</h5>
//                       <div className="flex flex-wrap gap-1 mt-1">
//                         {selectedArticle.themes.map(theme => (
//                           <span key={theme} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
//                             {theme}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
                    
//                     <div>
//                       <h5 className="text-sm font-medium text-gray-700">Summary:</h5>
//                       <p className="text-xs text-gray-600 mt-1">{selectedArticle.summary}</p>
//                     </div>
                    
//                     <div className="mt-auto">
//                       <a 
//                         href={selectedArticle.url} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="text-xs text-blue-600 hover:underline"
//                       >
//                         View original article
//                       </a>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//             <h3 className="text-lg font-bold mb-2">Network Analysis Insights:</h3>
//             <div className="text-sm space-y-3">
//               <p>The network visualization reveals key patterns in the thematic structure of coverage:</p>
//               <ol className="list-decimal pl-5 space-y-1">
//                 <li>
//                   <strong>Central Themes</strong>: The <span className="text-blue-600">Legal Process</span> and <span className="text-red-600">Genocide Allegations</span> form the core of the thematic network, with most other themes connecting to these central narratives.
//                 </li>
//                 <li>
//                   <strong>Theme Clusters</strong>: Two distinct thematic clusters emerge - a legal-procedural cluster and a contextual-political cluster, with <span className="text-yellow-600">UAE Support for RSF</span> acting as a bridge between them.
//                 </li>
//                 <li>
//                   <strong>Evolving Connections</strong>: Later articles (March 15-20) establish connections between previously separate themes, particularly linking <span className="text-green-600">Economic Interests</span> with <span className="text-purple-600">Regional Geopolitics</span>.
//                 </li>
//                 <li>
//                   <strong>Article Distribution</strong>: Articles from mainstream news sources tend to connect to multiple themes, while specialized publications (legal blogs, regional outlets) focus on specific thematic areas.
//                 </li>
//               </ol>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ThematicNetworkAnalysis;

















































































// import React, { useState, useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const ThematicNetworkAnalysis = () => {
//   const [activeView, setActiveView] = useState('thematicAnalysis');
//   const [selectedTheme, setSelectedTheme] = useState(null);
//   const [selectedArticle, setSelectedArticle] = useState(null);
//   const [graphData, setGraphData] = useState(null);
//   const [transform, setTransform] = useState({ x: 0, y: 0, k: 1 });
  
//   const networkRef = useRef(null);
//   const svgRef = useRef(null);
  
//   // Sample articles with thematic tagging
//   const articleData = [
//     {
//       id: 1,
//       title: "Sudan files case against UAE at top UN court over 'complicity in genocide'",
//       source: "Al Jazeera",
//       date: "2025-03-06",
//       url: "https://www.aljazeera.com/news/2025/3/6/sudan-files-case-against-uae-at-top-un-court-over-complicity-in-genocide",
//       summary: "Sudan files a case against the UAE at the ICJ, accusing it of supporting the RSF which is implicated in genocide against the Masalit people.",
//       themes: ["ICJ Filing", "Genocide Allegations", "UAE Support for RSF"],
//       quotes: [
//         "In its application to the ICJ, also known as the World Court, Sudan said it was seeking to 'obtain redress for the UAE's violations of Sudan's sovereignty, its interference in Sudan's internal affairs, and its use of force against the Sudanese people'.",
//         "The Sudanese Ministry of Foreign Affairs said in a statement on Wednesday that it had presented evidence that the UAE provided weapons and financial and political support to the RSF."
//       ]
//     },
//     {
//       id: 5,
//       title: "Sudan Takes UAE to World Court Over Alleged Complicity in Genocide",
//       source: "Religion Unplugged",
//       date: "2025-03-11",
//       url: "https://religionunplugged.com/news/2025/3/11/sudan-takes-uae-to-world-court-over-alleged-complicity-in-genocide",
//       summary: "Sudan files case against UAE at ICJ, focusing on atrocities against the Masalit group in West Darfur.",
//       themes: ["Genocide Allegations", "Masalit Targeting", "ICJ Jurisdiction"],
//       quotes: [
//         "In their application to the ICJ, Sudan seeks redress for the UAE's actions and asserts that the UAE has breached its obligations under international law, including the UN Charter, the Genocide Convention, and the International Covenant on Civil and Political Rights.",
//         "The ministry stated that the UAE has violated Sudan's sovereignty and interfered in its internal affairs through its support of the RSF."
//       ]
//     },
//     {
//       id: 12,
//       title: "What is the UAE's involvement in war-torn Sudan?",
//       source: "France 24",
//       date: "2025-03-08",
//       url: "https://www.france24.com/en/live-news/20250308-what-is-the-uae-s-involvement-in-war-torn-sudan",
//       summary: "Analysis of UAE's alleged involvement in Sudan conflict, examining weapons supply and strategic interests.",
//       themes: ["UAE Support for RSF", "Weapons Supply", "Regional Geopolitics"],
//       quotes: [
//         "Since fighting broke out in April 2024 between the Sudanese army and the RSF, the UAE has officially maintained a neutral stance, calling for a peaceful resolution to the conflict. However, several reports and investigations have suggested that the UAE has been providing support to the RSF.",
//         "The UAE's alleged support for the RSF has drawn criticism from human rights groups and international organisations. They accuse the UAE of fuelling the conflict and contributing to the suffering of the Sudanese people."
//       ]
//     },
//     {
//       id: 14,
//       title: "Sudan Takes UAE To World Court Over Alleged Complicity In Genocide",
//       source: "Forbes",
//       date: "2025-03-09",
//       url: "https://www.forbes.com/sites/ewelinaochab/2025/03/09/sudan-takes-uae-to-world-court-over-alleged-complicity-in-genocide/",
//       summary: "Legal analysis of Sudan's ICJ filing against UAE under the Genocide Convention.",
//       themes: ["ICJ Process", "Genocide Convention", "Legal Precedent"],
//       quotes: [
//         "In its Application instituting proceedings before the ICJ, Sudan stated that it 'seeks to obtain redress for the UAE's violations of Sudan's sovereignty, its interference in Sudan's internal affairs, and its use of force against the Sudanese people.'",
//         "The Application also stated that '[t]hrough its actions, the UAE has prolonged and intensified the conflict, resulting in the widespread destruction of infrastructure, countless civilian casualties, and a grave humanitarian crisis.'"
//       ]
//     },
//     {
//       id: 24,
//       title: "Art. IX Reservations to the Genocide Convention Are Here to Stay? A Response to Diamond",
//       source: "Opinio Juris",
//       date: "2025-03-14",
//       url: "https://opiniojuris.org/2025/03/14/art-ix-reservations-to-the-genocide-convention-are-here-to-stay-a-response-to-diamond/",
//       summary: "Analysis of UAE's reservation to Article IX of the Genocide Convention and implications for ICJ jurisdiction.",
//       themes: ["ICJ Jurisdiction", "Genocide Convention", "Legal Analysis"],
//       quotes: [
//         "Diamond argues that these reservations are incompatible with the object and purpose of the Genocide Convention, and therefore impermissible under Article 19(c) of the Vienna Convention on the Law of Treaties (VCLT).",
//         "With all due respect, I disagree. In my view, reservations to Article IX should be considered permissible because they do not frustrate the object and purpose of the Genocide Convention."
//       ]
//     },
//     {
//       id: 30,
//       title: "Could Sudan be split into two countries?",
//       source: "Deutsche Welle",
//       date: "2025-03-15",
//       url: "https://www.dw.com/en/could-sudan-be-split-into-two-countries/a-71923002",
//       summary: "Analysis of potential partition of Sudan amid ongoing civil conflict between SAF and RSF.",
//       themes: ["Humanitarian Crisis", "Regional Geopolitics", "Territorial Control"],
//       quotes: [
//         "The ongoing civil war in Sudan between the Sudanese Armed Forces (SAF) and the Rapid Support Forces (RSF) has raised concerns about the potential partition of the country.",
//         "The conflict has resulted in over 14 million displaced individuals and severe food shortages, with parts of the country facing famine. The humanitarian situation continues to deteriorate amid ongoing violence."
//       ]
//     },
//     {
//       id: 38,
//       title: "Sudan's war: What's driving UAE and Saudi Arabia interests?",
//       source: "Nation Africa",
//       date: "2025-03-16",
//       url: "https://nation.africa/kenya/news/africa/sudan-s-war-what-s-driving-uae-and-saudi-arabia-interests--4966818",
//       summary: "Analysis of UAE's economic interests in Sudan, particularly gold mining and agricultural investments.",
//       themes: ["Economic Interests", "Gold Trade", "Regional Geopolitics"],
//       quotes: [
//         "The UAE invested in the agricultural sector, acquiring large tracts of land to ensure food security.",
//         "The UAE also invested in the gold sector. Gold has been one of the main drivers of the Sudan conflict. It allows both parties to fuel their war machines. The UAE is the main beneficiary of this trade. It receives nearly all the gold smuggled from Sudan and has become a hub for laundering trafficked gold into the global market."
//       ]
//     },
//     {
//       id: 39,
//       title: "UAE-Backed RSF Militia's Genocide Against the Masalit Tribe in Darfur",
//       source: "Al-Estiklal",
//       date: "2025-03-16",
//       url: "https://www.alestiklal.net/en/article/uae-backed-rsf-militia-s-genocide-against-the-masalit-tribe-in-darfur",
//       summary: "Detailed report on alleged genocide against Masalit tribe by RSF with UAE support.",
//       themes: ["Genocide Allegations", "Masalit Targeting", "UAE Support for RSF"],
//       quotes: [
//         "Massacres are not new in Sudan, where the ongoing civil war between the military and the Emirati-backed RSF militia has claimed the lives of thousands of civilians.",
//         "However, a particularly tragic chapter is unfolding in Darfur, where the Masalit tribe faced a genocide in 2023."
//       ]
//     }
//   ];
  
//   // Define themes with sub-themes and connections
//   const themeData = {
//     "Legal Process": {
//       key: "legal-process",
//       description: "Coverage focused on legal procedures, ICJ processes and jurisdictional questions.",
//       subThemes: ["ICJ Filing", "ICJ Jurisdiction", "Genocide Convention", "Legal Analysis", "Legal Precedent"],
//       articles: [1, 5, 14, 24],
//       connections: ["Genocide Allegations", "UAE Support for RSF"],
//       textEvidence: [
//         "In its application to the ICJ, Sudan stated it seeks redress for violations of its sovereignty and interference in its internal affairs.",
//         "The case pertains to alleged breaches under the Genocide Convention.",
//         "The ICJ has the authority to issue binding rulings on disputes between states, although enforcement can vary."
//       ]
//     },
//     "Genocide Allegations": {
//       key: "genocide-allegations",
//       description: "Coverage of alleged genocide against the Masalit people and other atrocities in Darfur.",
//       subThemes: ["Masalit Targeting", "West Darfur Atrocities", "RSF Atrocities"],
//       articles: [1, 5, 39],
//       connections: ["Legal Process", "UAE Support for RSF", "Humanitarian Crisis"],
//       textEvidence: [
//         "Reports have emerged accusing the RSF, with alleged Emirati backing, of committing acts of genocide in Darfur.",
//         "Testimonies and evidence indicate large-scale atrocities against the Masalit tribe.",
//         "Sudan’s case before the ICJ alleges that the UAE supported a genocidal campaign in Darfur."
//       ]
//     },
//     "UAE Support for RSF": {
//       key: "uae-support",
//       description: "Allegations of the UAE providing weapons, financial and political support to the RSF.",
//       subThemes: ["Weapons Supply", "Financial Support", "Military Training"],
//       articles: [1, 12, 39],
//       connections: ["Genocide Allegations", "Legal Process", "Economic Interests"],
//       textEvidence: [
//         "Sudan accuses the UAE of supplying the RSF with weapons, training and financial assistance.",
//         "Investigations suggest ongoing support from the UAE to the RSF.",
//         "The Ministry of Foreign Affairs presented evidence of UAE support to the RSF."
//       ]
//     },
//     "Humanitarian Crisis": {
//       key: "humanitarian-crisis",
//       description: "Coverage of civilian casualties, displacement and the broader humanitarian impact of the conflict.",
//       subThemes: ["Civilian Casualties", "Displaced Persons", "Humanitarian Aid", "Famine Risk"],
//       articles: [30],
//       connections: ["Genocide Allegations", "Regional Geopolitics"],
//       textEvidence: [
//         "The conflict has resulted in millions being displaced and severe food shortages in affected regions.",
//         "Humanitarian conditions continue to worsen amid persistent violence.",
//         "The UN has warned that the crisis could escalate into widespread famine."
//       ]
//     },
//     "Economic Interests": {
//       key: "economic-interests",
//       description: "Focus on economic motivations and resource control as drivers of the conflict.",
//       subThemes: ["Gold Trade", "Agricultural Land", "Resource Control"],
//       articles: [38],
//       connections: ["UAE Support for RSF", "Regional Geopolitics"],
//       textEvidence: [
//         "The UAE’s investment in the gold and agricultural sectors plays a significant role in the conflict dynamics.",
//         "Control over resources is a major factor in the economic interests driving the dispute.",
//         "Economic strategies have been linked to broader geopolitical manoeuvres in the region."
//       ]
//     },
//     "Regional Geopolitics": {
//       key: "regional-geopolitics",
//       description: "Analysis of broader regional implications and strategic interests at play.",
//       subThemes: ["Power Dynamics", "Regional Influence", "Strategic Interests", "Territorial Control"],
//       articles: [12, 30, 38],
//       connections: ["Humanitarian Crisis", "Economic Interests", "UAE Support for RSF"],
//       textEvidence: [
//         "Analysts suggest that the UAE’s support for the RSF is aimed at increasing its influence in Sudan.",
//         "The conflict has far-reaching geopolitical implications in the region.",
//         "Multiple interests, including security and economic gains, drive the regional dynamics."
//       ]
//     }
//   };
  
//   // Process theme data for network visualisation
//   useEffect(() => {
//     const nodes = [];
//     const links = [];
    
//     // Add main theme nodes
//     Object.entries(themeData).forEach(([name, theme]) => {
//       nodes.push({
//         id: theme.key,
//         name: name,
//         type: 'theme',
//         radius: 25,
//         articles: theme.articles,
//         description: theme.description
//       });
      
//       // Add connections between themes
//       theme.connections.forEach(connectedTheme => {
//         const connectedKey = themeData[connectedTheme]?.key;
//         if (connectedKey) {
//           links.push({
//             source: theme.key,
//             target: connectedKey,
//             strength: 0.7,
//             type: 'theme-theme'
//           });
//         }
//       });
      
//       // Add subtheme nodes and connections
//       theme.subThemes.forEach(subTheme => {
//         const subThemeId = `${theme.key}-${subTheme.toLowerCase().replace(/\s+/g, '-')}`;
//         nodes.push({
//           id: subThemeId,
//           name: subTheme,
//           type: 'subtheme',
//           parent: theme.key,
//           radius: 15,
//           description: `Subtheme of ${name}`
//         });
        
//         links.push({
//           source: theme.key,
//           target: subThemeId,
//           strength: 0.9,
//           type: 'theme-subtheme'
//         });
//       });
      
//       // Add article nodes and connections
//       theme.articles.forEach(articleId => {
//         const article = articleData.find(a => a.id === articleId);
//         if (article) {
//           if (!nodes.some(n => n.id === `article-${article.id}`)) {
//             nodes.push({
//               id: `article-${article.id}`,
//               name: article.title,
//               type: 'article',
//               source: article.source,
//               date: article.date,
//               radius: 10,
//               data: article
//             });
//           }
          
//           links.push({
//             source: theme.key,
//             target: `article-${article.id}`,
//             strength: 0.5,
//             type: 'theme-article'
//           });
//         }
//       });
//     });
    
//     setGraphData({ nodes, links });
//   }, []);
  
//   // Initialise and update the network visualisation
//   useEffect(() => {
//     if (!graphData || !svgRef.current) return;
    
//     d3.select(svgRef.current).selectAll("*").remove();
    
//     const width = svgRef.current.clientWidth;
//     const height = svgRef.current.clientHeight;
    
//     const svg = d3.select(svgRef.current)
//       .attr("width", width)
//       .attr("height", height);
    
//     const container = svg.append("g").attr("class", "container");
    
//     const zoom = d3.zoom()
//       .scaleExtent([0.1, 4])
//       .on("zoom", (event) => {
//         container.attr("transform", event.transform);
//         setTransform({
//           x: event.transform.x,
//           y: event.transform.y,
//           k: event.transform.k
//         });
//       });
    
//     svg.call(zoom);
//     svg.call(zoom.transform, d3.zoomIdentity.translate(width / 3, height / 3).scale(0.8));
    
//     const colorScale = d3.scaleOrdinal()
//       .domain(['theme', 'subtheme', 'article'])
//       .range(['#3b82f6', '#10b981', '#f59e0b']);
    
//     const simulation = d3.forceSimulation(graphData.nodes)
//       .force("link", d3.forceLink(graphData.links)
//         .id(d => d.id)
//         .distance(d => {
//           if (d.type === 'theme-subtheme') return 60;
//           if (d.type === 'theme-article') return 100;
//           return 150;
//         })
//         .strength(d => d.strength))
//       .force("charge", d3.forceManyBody().strength(-300))
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .force("collision", d3.forceCollide().radius(d => d.radius * 1.5));
    
//     const link = container.append("g")
//       .attr("class", "links")
//       .selectAll("line")
//       .data(graphData.links)
//       .enter().append("line")
//       .attr("stroke-width", d => {
//         if (d.type === 'theme-theme') return 3;
//         if (d.type === 'theme-subtheme') return 2;
//         return 1;
//       })
//       .attr("stroke", d => {
//         if (d.type === 'theme-theme') return "#6b7280";
//         if (d.type === 'theme-subtheme') return "#93c5fd";
//         return "#d1d5db";
//       })
//       .attr("stroke-opacity", 0.6)
//       .attr("stroke-dasharray", d => d.type === 'theme-article' ? "3,3" : null);
    
//     const node = container.append("g")
//       .attr("class", "nodes")
//       .selectAll(".node")
//       .data(graphData.nodes)
//       .enter().append("g")
//       .attr("class", "node")
//       .call(d3.drag()
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended));
    
//     node.append("circle")
//       .attr("r", d => d.radius)
//       .attr("fill", d => colorScale(d.type))
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 1.5)
//       .on("click", (event, d) => {
//         if (d.type === 'theme') {
//           setSelectedTheme(d.name);
//           setSelectedArticle(null);
//         } else if (d.type === 'article') {
//           setSelectedArticle(d.data);
//           setSelectedTheme(null);
//         }
//       });
    
//     node.append("text")
//       .attr("dy", d => d.type === 'theme' ? -30 : -15)
//       .attr("text-anchor", "middle")
//       .attr("font-size", d => d.type === 'theme' ? "12px" : d.type === 'subtheme' ? "10px" : "8px")
//       .attr("font-weight", d => d.type === 'theme' ? "bold" : "normal")
//       .text(d => d.type === 'article' 
//         ? `${d.source} (${d.date.split('-')[2]}/${d.date.split('-')[1]})`
//         : d.name)
//       .each(function(d) {
//         if (d.type === 'article') {
//           const title = d.name.length > 25 ? d.name.substring(0, 22) + '...' : d.name;
//           d3.select(this.parentNode)
//             .append("text")
//             .attr("dy", -5)
//             .attr("text-anchor", "middle")
//             .attr("font-size", "8px")
//             .text(title);
//         }
//       });
    
//     simulation.on("tick", () => {
//       link
//         .attr("x1", d => d.source.x)
//         .attr("y1", d => d.source.y)
//         .attr("x2", d => d.target.x)
//         .attr("y2", d => d.target.y);
      
//       node.attr("transform", d => `translate(${d.x}, ${d.y})`);
//     });
    
//     function dragstarted(event, d) {
//       if (!event.active) simulation.alphaTarget(0.3).restart();
//       d.fx = d.x;
//       d.fy = d.y;
//     }
    
//     function dragged(event, d) {
//       d.fx = event.x;
//       d.fy = event.y;
//     }
    
//     function dragended(event, d) {
//       if (!event.active) simulation.alphaTarget(0);
//       d.fx = null;
//       d.fy = null;
//     }
    
//     const legend = svg.append("g")
//       .attr("transform", `translate(20, ${height - 80})`);
    
//     const legendItems = [
//       { type: 'theme', label: 'Main Theme' },
//       { type: 'subtheme', label: 'Sub-Theme' },
//       { type: 'article', label: 'Article' }
//     ];
    
//     legendItems.forEach((item, i) => {
//       const legendItem = legend.append("g")
//         .attr("transform", `translate(0, ${i * 20})`);
      
//       legendItem.append("circle")
//         .attr("r", item.type === 'theme' ? 8 : item.type === 'subtheme' ? 6 : 4)
//         .attr("fill", colorScale(item.type));
      
//       legendItem.append("text")
//         .attr("x", 15)
//         .attr("y", 4)
//         .attr("font-size", "10px")
//         .text(item.label);
//     });
    
//     return () => {
//       simulation.stop();
//     };
//   }, [graphData]);
  
//   const getArticlesForTheme = (themeName) => {
//     const theme = themeData[themeName];
//     if (!theme) return [];
//     return theme.articles.map(id => articleData.find(article => article.id === id)).filter(Boolean);
//   };
  
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="container mx-auto px-4 py-8 max-w-6xl">
//         <h2 className="text-2xl font-bold mb-6 text-center">Thematic Network Analysis</h2>
        
//         {/* View Selector */}
//         <div className="mb-6 border-b flex">
//           <button 
//             className={`pb-3 px-4 transition-colours ${activeView === 'thematicAnalysis' ? 'border-b-2 border-blue-500 text-blue-600 font-medium' : 'text-gray-500'}`}
//             onClick={() => setActiveView('thematicAnalysis')}
//           >
//             Thematic Analysis
//           </button>
//           <button 
//             className={`pb-3 px-4 transition-colours ${activeView === 'networkGraph' ? 'border-b-2 border-blue-500 text-blue-600 font-medium' : 'text-gray-500'}`}
//             onClick={() => setActiveView('networkGraph')}
//           >
//             Interactive Network Graph
//           </button>
//         </div>
        
//         {/* Thematic Analysis View */}
//         {activeView === 'thematicAnalysis' && (
//           <div>
//             <p className="text-gray-600 mb-6">
//               Analysing key themes in the Sudan–UAE ICJ case coverage, with evidence traced to specific articles.
//             </p>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//               {Object.entries(themeData).map(([name, theme]) => (
//                 <div 
//                   key={theme.key} 
//                   className={`bg-white rounded-lg shadow-md p-4 cursor-pointer transition-colours hover:shadow-lg ${selectedTheme === name ? 'ring-2 ring-blue-500 bg-blue-50' : ''}`}
//                   onClick={() => setSelectedTheme(name === selectedTheme ? null : name)}
//                 >
//                   <h3 className="font-semibold text-lg mb-1">{name}</h3>
//                   <p className="text-sm text-gray-600 mb-2">{theme.description}</p>
//                   <div className="flex flex-wrap gap-1 mb-2">
//                     {theme.subThemes.map(subTheme => (
//                       <span key={subTheme} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
//                         {subTheme}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     {theme.articles.length} articles | {theme.connections.length} connections
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             {selectedTheme && (
//               <div className="bg-gray-50 rounded-lg p-4 mb-6 border">
//                 <h3 className="text-xl font-semibold mb-3">{selectedTheme}</h3>
//                 <p className="text-gray-700 mb-4">{themeData[selectedTheme].description}</p>
                
//                 <div className="mb-4">
//                   <h4 className="font-medium mb-2">Key Evidence:</h4>
//                   <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
//                     {themeData[selectedTheme].textEvidence.map((evidence, i) => (
//                       <li key={i}>{evidence}</li>
//                     ))}
//                   </ul>
//                 </div>
                
//                 <div className="mb-4">
//                   <h4 className="font-medium mb-2">Related Themes:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {themeData[selectedTheme].connections.map(connectedTheme => (
//                       <span 
//                         key={connectedTheme}
//                         className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded cursor-pointer"
//                         onClick={() => setSelectedTheme(connectedTheme)}
//                       >
//                         {connectedTheme}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div>
//                   <h4 className="font-medium mb-2">Articles with this Theme:</h4>
//                   <div className="space-y-3">
//                     {getArticlesForTheme(selectedTheme).map(article => (
//                       <div 
//                         key={article.id}
//                         className="bg-white border p-3 rounded cursor-pointer hover:bg-blue-50 transition-colours"
//                         onClick={() => setSelectedArticle(article)}
//                       >
//                         <div className="flex justify-between items-start">
//                           <h5 className="font-medium text-sm">{article.title}</h5>
//                           <span className="text-xs text-gray-500">{article.date.split('-')[2]}/{article.date.split('-')[1]}</span>
//                         </div>
//                         <div className="text-xs text-gray-600 mt-1">{article.source}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
            
//             {selectedArticle && (
//               <div className="bg-white rounded-lg shadow-md p-4 mb-6 border">
//                 <div className="flex justify-between items-start mb-3">
//                   <h3 className="text-xl font-semibold">{selectedArticle.title}</h3>
//                   <button 
//                     className="text-gray-400 hover:text-gray-600 transition-colours"
//                     onClick={() => setSelectedArticle(null)}
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </button>
//                 </div>
                
//                 <div className="text-sm text-gray-600 mb-4">
//                   {selectedArticle.source} | {selectedArticle.date}
//                 </div>
                
//                 <div className="mb-4">
//                   <h4 className="font-medium mb-2">Summary:</h4>
//                   <p className="text-gray-700">{selectedArticle.summary}</p>
//                 </div>
                
//                 <div className="mb-4">
//                   <h4 className="font-medium mb-2">Themes:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedArticle.themes.map(theme => (
//                       <span key={theme} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">
//                         {theme}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div>
//                   <h4 className="font-medium mb-2">Key Quotes:</h4>
//                   <div className="space-y-2">
//                     {selectedArticle.quotes.map((quote, index) => (
//                       <div key={index} className="bg-gray-50 p-3 border-l-4 border-gray-300 text-sm italic">
//                         "{quote}"
//                       </div>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div className="mt-4 text-sm">
//                   <a 
//                     href={selectedArticle.url} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:underline transition-colours"
//                   >
//                     View original article
//                   </a>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
        
//         {/* Network Graph View */}
//         {activeView === 'networkGraph' && (
//           <div>
//             <p className="text-gray-600 mb-4">
//               Interactive visualisation of themes, subthemes and articles. Drag nodes to reposition, scroll to zoom and click nodes for details.
//             </p>
            
//             <div className="flex flex-col md:flex-row gap-6">
//               <div className="md:w-2/3">
//                 <div 
//                   ref={networkRef} 
//                   className="border rounded-lg bg-gray-50 h-[600px] relative"
//                 >
//                   <svg 
//                     ref={svgRef} 
//                     className="w-full h-full"
//                     style={{ background: '#f9fafb' }}
//                   ></svg>
                  
//                   <div className="absolute bottom-4 right-4 bg-white p-2 rounded shadow-sm text-xs flex items-center space-x-3">
//                     <button 
//                       className="px-2 py-1 bg-blue-100 text-blue-800 rounded transition-colours"
//                       onClick={() => {
//                         const svg = d3.select(svgRef.current);
//                         svg.call(d3.zoom().transform, d3.zoomIdentity.translate(
//                           svgRef.current.clientWidth / 3, 
//                           svgRef.current.clientHeight / 3
//                         ).scale(0.8));
//                       }}
//                     >
//                       Reset View
//                     </button>
//                     <div>Zoom: {Math.round(transform.k * 100)}%</div>
//                   </div>
                  
//                   <div className="absolute top-4 left-4 bg-white p-2 rounded shadow-md text-xs max-w-xs">
//                     <p className="font-medium text-sm mb-1">Network Insights:</p>
//                     <ul className="list-disc pl-4 space-y-1">
//                       <li>Central themes (larger nodes) represent main narratives</li>
//                       <li>Connected subthemes reveal component narratives</li>
//                       <li>Solid lines indicate strong thematic connections</li>
//                       <li>Dashed lines link themes to source articles</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="md:w-1/3">
//                 <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col">
//                   <h3 className="text-lg font-semibold mb-3">Node Details</h3>
                  
//                   {!selectedTheme && !selectedArticle ? (
//                     <div className="flex-1 flex items-center justify-center p-6 text-center text-gray-500">
//                       <p>Click on a node in the network graph to view details</p>
//                     </div>
//                   ) : selectedTheme ? (
//                     <div className="space-y-4">
//                       <div>
//                         <h4 className="font-medium">{selectedTheme}</h4>
//                         <p className="text-sm text-gray-600 mt-1">{themeData[selectedTheme].description}</p>
//                       </div>
                      
//                       <div>
//                         <h5 className="text-sm font-medium text-gray-700">Sub-Themes:</h5>
//                         <div className="flex flex-wrap gap-1 mt-1">
//                           {themeData[selectedTheme].subThemes.map(subTheme => (
//                             <span key={subTheme} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
//                               {subTheme}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
                      
//                       <div>
//                         <h5 className="text-sm font-medium text-gray-700">Related Themes:</h5>
//                         <div className="flex flex-wrap gap-1 mt-1">
//                           {themeData[selectedTheme].connections.map(theme => (
//                             <span key={theme} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
//                               {theme}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
                      
//                       <div>
//                         <h5 className="text-sm font-medium text-gray-700">Related Articles:</h5>
//                         <ul className="text-sm space-y-1 mt-1">
//                           {getArticlesForTheme(selectedTheme).map(article => (
//                             <li key={article.id} className="truncate">
//                               <button 
//                                 className="text-blue-600 hover:underline text-left truncate w-full text-xs transition-colours"
//                                 onClick={() => setSelectedArticle(article)}
//                               >
//                                 {article.source}: {article.title}
//                               </button>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="space-y-4">
//                       <div>
//                         <h4 className="font-medium truncate">{selectedArticle.title}</h4>
//                         <p className="text-sm text-gray-600 mt-1">{selectedArticle.source} | {selectedArticle.date}</p>
//                       </div>
                      
//                       <div>
//                         <h5 className="text-sm font-medium text-gray-700">Themes:</h5>
//                         <div className="flex flex-wrap gap-1 mt-1">
//                           {selectedArticle.themes.map(theme => (
//                             <span key={theme} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
//                               {theme}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
                      
//                       <div>
//                         <h5 className="text-sm font-medium text-gray-700">Summary:</h5>
//                         <p className="text-xs text-gray-600 mt-1">{selectedArticle.summary}</p>
//                       </div>
                      
//                       <div className="mt-auto">
//                         <a 
//                           href={selectedArticle.url} 
//                           target="_blank" 
//                           rel="noopener noreferrer"
//                           className="text-xs text-blue-600 hover:underline transition-colours"
//                         >
//                           View original article
//                         </a>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
            
//             <div className="mt-6 bg-gray-50 p-4 rounded-lg">
//               <h3 className="text-lg font-bold mb-2">Network Analysis Insights:</h3>
//               <div className="text-sm space-y-3">
//                 <p>The network visualisation reveals key patterns in the thematic structure of coverage:</p>
//                 <ol className="list-decimal pl-5 space-y-1">
//                   <li>
//                     <strong>Central Themes</strong>: The <span className="text-blue-600">Legal Process</span> and <span className="text-red-600">Genocide Allegations</span> form the core of the thematic network.
//                   </li>
//                   <li>
//                     <strong>Theme Clusters</strong>: Two clusters emerge – a legal–procedural cluster and a contextual–political cluster, with <span className="text-yellow-600">UAE Support for RSF</span> bridging them.
//                   </li>
//                   <li>
//                     <strong>Evolving Connections</strong>: Later articles (March 15–20) forge links between previously distinct themes, notably connecting <span className="text-green-600">Economic Interests</span> with <span className="text-purple-600">Regional Geopolitics</span>.
//                   </li>
//                   <li>
//                     <strong>Article Distribution</strong>: Mainstream sources tend to connect to multiple themes, while niche publications focus on specific areas.
//                   </li>
//                 </ol>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ThematicNetworkAnalysis;














import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ThematicNetworkAnalysis = () => {
  // State for switching between Thematic Analysis and Network Graph
  const [activeView, setActiveView] = useState('thematicAnalysis');

  // States for node selection in the side panels
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // The processed graph data (nodes & links)
  const [graphData, setGraphData] = useState(null);

  // Zoom/pan transform
  const [transform, setTransform] = useState({ x: 0, y: 0, k: 1 });

  // Track the container’s size for the D3 graph
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Refs for measuring and drawing the graph
  const networkRef = useRef(null);
  const svgRef = useRef(null);

  /************************************
   * 1) SAMPLE DATA: ARTICLES & THEMES
   ************************************/
  const articleData = [
    {
      id: 1,
      title: "Sudan files case against UAE at top UN court over 'complicity in genocide'",
      source: "Al Jazeera",
      date: "2025-03-06",
      url: "https://www.aljazeera.com/news/2025/3/6/sudan-files-case-against-uae-at-top-un-court-over-complicity-in-genocide",
      summary: "Sudan files a case against the UAE at the ICJ, accusing it of supporting the RSF which is implicated in genocide against the Masalit people.",
      themes: ["ICJ Filing", "Genocide Allegations", "UAE Support for RSF"],
      quotes: [
        "In its application to the ICJ, Sudan said it was seeking to 'obtain redress for the UAE's violations of Sudan's sovereignty...'",
        "Sudan presented evidence that the UAE provided weapons and financial and political support to the RSF."
      ]
    },
    {
      id: 5,
      title: "Sudan Takes UAE to World Court Over Alleged Complicity in Genocide",
      source: "Religion Unplugged",
      date: "2025-03-11",
      url: "https://religionunplugged.com/news/2025/3/11/sudan-takes-uae-to-world-court-over-alleged-complicity-in-genocide",
      summary: "Sudan files case against UAE at ICJ, focusing on atrocities against the Masalit group in West Darfur.",
      themes: ["Genocide Allegations", "Masalit Targeting", "ICJ Jurisdiction"],
      quotes: [
        "Sudan seeks redress for the UAE's actions, asserting that the UAE has breached its obligations under international law.",
        "The ministry stated that the UAE has violated Sudan's sovereignty and interfered in its internal affairs through its support of the RSF."
      ]
    },
    {
      id: 12,
      title: "What is the UAE's involvement in war-torn Sudan?",
      source: "France 24",
      date: "2025-03-08",
      url: "https://www.france24.com/en/live-news/20250308-what-is-the-uae-s-involvement-in-war-torn-sudan",
      summary: "Analysis of the UAE's alleged involvement in Sudan's conflict, examining weapons supply and strategic interests.",
      themes: ["UAE Support for RSF", "Weapons Supply", "Regional Geopolitics"],
      quotes: [
        "Several investigations suggest that the UAE has been providing support to the RSF.",
        "Human rights groups accuse the UAE of fuelling the conflict, contributing to the suffering of the Sudanese people."
      ]
    },
    {
      id: 14,
      title: "Sudan Takes UAE To World Court Over Alleged Complicity In Genocide",
      source: "Forbes",
      date: "2025-03-09",
      url: "https://www.forbes.com/sites/ewelinaochab/2025/03/09/sudan-takes-uae-to-world-court-over-alleged-complicity-in-genocide/",
      summary: "Legal analysis of Sudan's ICJ filing against the UAE under the Genocide Convention.",
      themes: ["ICJ Process", "Genocide Convention", "Legal Precedent"],
      quotes: [
        "Sudan’s Application seeks to obtain redress for the UAE's alleged violations of Sudan's sovereignty.",
        "The Application claims the UAE has prolonged and intensified the conflict, causing a grave humanitarian crisis."
      ]
    },
    {
      id: 24,
      title: "Art. IX Reservations to the Genocide Convention Are Here to Stay?",
      source: "Opinio Juris",
      date: "2025-03-14",
      url: "https://opiniojuris.org/2025/03/14/art-ix-reservations-to-the-genocide-convention-are-here-to-stay-a-response-to-diamond/",
      summary: "Analysis of the UAE's reservation to Article IX of the Genocide Convention and implications for ICJ jurisdiction.",
      themes: ["ICJ Jurisdiction", "Genocide Convention", "Legal Analysis"],
      quotes: [
        "Diamond argues that reservations to Article IX are incompatible with the object and purpose of the Genocide Convention.",
        "Others argue that such reservations remain permissible as they do not frustrate the Convention's purpose."
      ]
    },
    {
      id: 30,
      title: "Could Sudan be split into two countries?",
      source: "Deutsche Welle",
      date: "2025-03-15",
      url: "https://www.dw.com/en/could-sudan-be-split-into-two-countries/a-71923002",
      summary: "Analysis of a potential partition of Sudan amid ongoing civil conflict between SAF and RSF.",
      themes: ["Humanitarian Crisis", "Regional Geopolitics", "Territorial Control"],
      quotes: [
        "Over 14 million have been displaced, and parts of the country face famine conditions.",
        "The humanitarian situation continues to deteriorate amid ongoing violence."
      ]
    },
    {
      id: 38,
      title: "Sudan's war: What's driving UAE and Saudi Arabia interests?",
      source: "Nation Africa",
      date: "2025-03-16",
      url: "https://nation.africa/kenya/news/africa/sudan-s-war-what-s-driving-uae-and-saudi-arabia-interests--4966818",
      summary: "Analysis of the UAE's economic interests in Sudan, particularly gold mining and agricultural investments.",
      themes: ["Economic Interests", "Gold Trade", "Regional Geopolitics"],
      quotes: [
        "The UAE invested heavily in agriculture and gold, fuelling conflict over resource control.",
        "Gold smuggled from Sudan frequently ends up in UAE markets, complicating the conflict’s financial underpinnings."
      ]
    },
    {
      id: 39,
      title: "UAE-Backed RSF Militia's Genocide Against the Masalit Tribe in Darfur",
      source: "Al-Estiklal",
      date: "2025-03-16",
      url: "https://www.alestiklal.net/en/article/uae-backed-rsf-militia-s-genocide-against-the-masalit-tribe-in-darfur",
      summary: "Detailed report on alleged genocide against the Masalit tribe by the RSF with UAE support.",
      themes: ["Genocide Allegations", "Masalit Targeting", "UAE Support for RSF"],
      quotes: [
        "A particularly tragic chapter is unfolding in Darfur, where the Masalit tribe faced genocide in 2023.",
        "The RSF, allegedly backed by the UAE, has been accused of mass killings, burnings, and other atrocities."
      ]
    }
  ];

  const themeData = {
    "Legal Process": {
      key: "legal-process",
      description: "Coverage focused on legal procedures, ICJ processes and jurisdictional questions.",
      subThemes: ["ICJ Filing", "ICJ Jurisdiction", "Genocide Convention", "Legal Analysis", "Legal Precedent"],
      articles: [1, 5, 14, 24],
      connections: ["Genocide Allegations", "UAE Support for RSF"],
      textEvidence: [
        "Sudan’s application to the ICJ seeks redress for violations of its sovereignty and interference in its affairs.",
        "The case pertains to alleged breaches under the Genocide Convention.",
        "The ICJ can issue binding rulings on disputes between states, but enforcement can be challenging."
      ]
    },
    "Genocide Allegations": {
      key: "genocide-allegations",
      description: "Coverage of alleged genocide against the Masalit people and other atrocities in Darfur.",
      subThemes: ["Masalit Targeting", "West Darfur Atrocities", "RSF Atrocities"],
      articles: [1, 5, 39],
      connections: ["Legal Process", "UAE Support for RSF", "Humanitarian Crisis"],
      textEvidence: [
        "Reports accuse the RSF, with alleged Emirati backing, of committing genocide in Darfur.",
        "Testimonies highlight large-scale atrocities against the Masalit tribe.",
        "Sudan’s ICJ case alleges the UAE supported a genocidal campaign in Darfur."
      ]
    },
    "UAE Support for RSF": {
      key: "uae-support",
      description: "Allegations of the UAE providing weapons, financial and political support to the RSF.",
      subThemes: ["Weapons Supply", "Financial Support", "Military Training"],
      articles: [1, 12, 39],
      connections: ["Genocide Allegations", "Legal Process", "Economic Interests"],
      textEvidence: [
        "Sudan accuses the UAE of supplying the RSF with weapons, training and funding.",
        "Investigations suggest ongoing UAE support, enabling RSF operations.",
        "The Ministry of Foreign Affairs presented evidence of the UAE’s backing for the RSF."
      ]
    },
    "Humanitarian Crisis": {
      key: "humanitarian-crisis",
      description: "Coverage of civilian casualties, displacement and the broader humanitarian impact of the conflict.",
      subThemes: ["Civilian Casualties", "Displaced Persons", "Humanitarian Aid", "Famine Risk"],
      articles: [30],
      connections: ["Genocide Allegations", "Regional Geopolitics"],
      textEvidence: [
        "The conflict has displaced millions and triggered severe food shortages.",
        "Humanitarian conditions worsen amid persistent violence and lack of aid.",
        "The UN warns of potential famine if the conflict persists."
      ]
    },
    "Economic Interests": {
      key: "economic-interests",
      description: "Focus on economic motivations and resource control as drivers of the conflict.",
      subThemes: ["Gold Trade", "Agricultural Land", "Resource Control"],
      articles: [38],
      connections: ["UAE Support for RSF", "Regional Geopolitics"],
      textEvidence: [
        "The UAE’s investments in gold and agriculture shape the conflict’s economic landscape.",
        "Resource control is a key driver, fuelling tensions and funding armed groups.",
        "Economic strategies link closely with the region’s broader geopolitical manoeuvres."
      ]
    },
    "Regional Geopolitics": {
      key: "regional-geopolitics",
      description: "Analysis of broader regional implications and strategic interests at play.",
      subThemes: ["Power Dynamics", "Regional Influence", "Strategic Interests", "Territorial Control"],
      articles: [12, 30, 38],
      connections: ["Humanitarian Crisis", "Economic Interests", "UAE Support for RSF"],
      textEvidence: [
        "The UAE’s involvement in Sudan is tied to increasing its regional influence.",
        "Partition or territorial realignment could reshape the region’s power balance.",
        "Economic and security interests underlie many of the regional actors’ motivations."
      ]
    }
  };

  /************************************
   * 2) MEASURE THE CONTAINER SIZE
   ************************************/
  useEffect(() => {
    function updateDimensions() {
      if (networkRef.current) {
        const { clientWidth, clientHeight } = networkRef.current;
        setDimensions({ width: clientWidth, height: clientHeight });
      }
    }
    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  /********************************************
   * 3) BUILD GRAPH DATA (NODES & LINKS) ONCE
   ********************************************/
  useEffect(() => {
    const nodes = [];
    const links = [];

    Object.entries(themeData).forEach(([name, theme]) => {
      // Main theme node
      nodes.push({
        id: theme.key,
        name,
        type: 'theme',
        radius: 25,
        articles: theme.articles,
        description: theme.description
      });

      // Theme-to-theme connections
      theme.connections.forEach((connectedTheme) => {
        const connectedKey = themeData[connectedTheme]?.key;
        if (connectedKey) {
          links.push({
            source: theme.key,
            target: connectedKey,
            strength: 0.7,
            type: 'theme-theme'
          });
        }
      });

      // Subtheme nodes
      theme.subThemes.forEach((subTheme) => {
        const subThemeId = `${theme.key}-${subTheme.toLowerCase().replace(/\s+/g, '-')}`;
        nodes.push({
          id: subThemeId,
          name: subTheme,
          type: 'subtheme',
          parent: theme.key,
          radius: 15,
          description: `Subtheme of ${name}`
        });
        links.push({
          source: theme.key,
          target: subThemeId,
          strength: 0.9,
          type: 'theme-subtheme'
        });
      });

      // Article nodes
      theme.articles.forEach((articleId) => {
        const article = articleData.find((a) => a.id === articleId);
        if (article) {
          const articleNodeId = `article-${article.id}`;
          if (!nodes.some((n) => n.id === articleNodeId)) {
            nodes.push({
              id: articleNodeId,
              name: article.title,
              type: 'article',
              source: article.source,
              date: article.date,
              radius: 10,
              data: article
            });
          }
          links.push({
            source: theme.key,
            target: articleNodeId,
            strength: 0.5,
            type: 'theme-article'
          });
        }
      });
    });

    setGraphData({ nodes, links });
  }, []);

  /**********************************************
   * 4) DRAW & UPDATE THE D3 NETWORK GRAPH
   **********************************************/
  useEffect(() => {
    if (!graphData) return;
    if (dimensions.width === 0 || dimensions.height === 0) return; // Wait for valid size

    const { width, height } = dimensions;

    // Clear any previous SVG content
    d3.select(svgRef.current).selectAll('*').remove();

    // Create the SVG
    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Container group for zoom/pan
    const container = svg.append('g').attr('class', 'container');

    // Zoom behaviour
    const zoom = d3
      .zoom()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => {
        container.attr('transform', event.transform);
        setTransform({
          x: event.transform.x,
          y: event.transform.y,
          k: event.transform.k
        });
      });

    // Attach zoom to SVG
    svg.call(zoom);

    // Initial transform
    svg.call(
      zoom.transform,
      d3.zoomIdentity.translate(width / 3, height / 3).scale(0.8)
    );

    // Colour scale
    const colorScale = d3
      .scaleOrdinal()
      .domain(['theme', 'subtheme', 'article'])
      .range(['#3b82f6', '#10b981', '#f59e0b']);

    // Force simulation
    const simulation = d3
      .forceSimulation(graphData.nodes)
      .force(
        'link',
        d3
          .forceLink(graphData.links)
          .id((d) => d.id)
          .distance((d) => {
            if (d.type === 'theme-subtheme') return 60;
            if (d.type === 'theme-article') return 100;
            return 150; // theme-theme
          })
          .strength((d) => d.strength)
      )
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius((d) => d.radius * 1.5));

    // Define a tooltip (for fully interactive hover)
    const tooltip = d3
      .select('body')
      .append('div')
      .attr('class', 'node-tooltip')
      .style('position', 'absolute')
      .style('padding', '6px 8px')
      .style('background', 'rgba(255,255,255,0.9)')
      .style('border', '1px solid #ccc')
      .style('border-radius', '4px')
      .style('font-size', '12px')
      .style('pointer-events', 'none')
      .style('visibility', 'hidden');

    // Links
    const link = container
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(graphData.links)
      .enter()
      .append('line')
      .attr('stroke-width', (d) => {
        if (d.type === 'theme-theme') return 3;
        if (d.type === 'theme-subtheme') return 2;
        return 1;
      })
      .attr('stroke', (d) => {
        if (d.type === 'theme-theme') return '#6b7280';
        if (d.type === 'theme-subtheme') return '#93c5fd';
        return '#d1d5db';
      })
      .attr('stroke-opacity', 0.6)
      .attr('stroke-dasharray', (d) => (d.type === 'theme-article' ? '3,3' : null));

    // Node group
    const node = container
      .append('g')
      .attr('class', 'nodes')
      .selectAll('.node')
      .data(graphData.nodes)
      .enter()
      .append('g')
      .attr('class', 'node')
      .call(
        d3
          .drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
      );

    // Circles
    node
      .append('circle')
      .attr('r', (d) => d.radius)
      .attr('fill', (d) => colorScale(d.type))
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .on('click', (event, d) => {
        // Node click => show details in side panel
        if (d.type === 'theme') {
          setSelectedTheme(d.name);
          setSelectedArticle(null);
        } else if (d.type === 'article') {
          setSelectedArticle(d.data);
          setSelectedTheme(null);
        }
      })
      .on('mouseover', (event, d) => {
        // Show tooltip on hover
        let tooltipText;
        if (d.type === 'theme') {
          tooltipText = `Theme: ${d.name}`;
        } else if (d.type === 'subtheme') {
          tooltipText = `Sub-theme: ${d.name}`;
        } else {
          tooltipText = `Article: ${d.name}`;
        }
        tooltip.html(tooltipText).style('visibility', 'visible');
      })
      .on('mousemove', (event) => {
        tooltip
          .style('top', event.pageY + 10 + 'px')
          .style('left', event.pageX + 10 + 'px');
      })
      .on('mouseout', () => {
        tooltip.style('visibility', 'hidden');
      });

    // Node labels
    node
      .append('text')
      .attr('dy', (d) => (d.type === 'theme' ? -30 : -15))
      .attr('text-anchor', 'middle')
      .attr('font-size', (d) =>
        d.type === 'theme' ? '12px' : d.type === 'subtheme' ? '10px' : '8px'
      )
      .attr('font-weight', (d) => (d.type === 'theme' ? 'bold' : 'normal'))
      .text((d) =>
        d.type === 'article'
          ? `${d.source} (${d.date.split('-')[2]}/${d.date.split('-')[1]})`
          : d.name
      )
      .each(function (d) {
        // For articles, add a second line with truncated title
        if (d.type === 'article') {
          const title = d.name.length > 25 ? d.name.substring(0, 22) + '...' : d.name;
          d3.select(this.parentNode)
            .append('text')
            .attr('dy', -5)
            .attr('text-anchor', 'middle')
            .attr('font-size', '8px')
            .text(title);
        }
      });

    // Simulation tick
    simulation.on('tick', () => {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);

      node.attr('transform', (d) => `translate(${d.x}, ${d.y})`);
    });

    // Drag handlers
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    // Legend
    const legend = svg.append('g').attr('transform', `translate(20, ${height - 80})`);
    const legendItems = [
      { type: 'theme', label: 'Main Theme' },
      { type: 'subtheme', label: 'Sub-Theme' },
      { type: 'article', label: 'Article' }
    ];
    legendItems.forEach((item, i) => {
      const legendItem = legend.append('g').attr('transform', `translate(0, ${i * 20})`);
      legendItem
        .append('circle')
        .attr('r', item.type === 'theme' ? 8 : item.type === 'subtheme' ? 6 : 4)
        .attr('fill', colorScale(item.type));
      legendItem
        .append('text')
        .attr('x', 15)
        .attr('y', 4)
        .attr('font-size', '10px')
        .text(item.label);
    });

    // Cleanup on unmount: stop the simulation, remove the tooltip
    return () => {
      simulation.stop();
      tooltip.remove();
    };
  }, [graphData, dimensions]);

  // Helper to fetch articles for a theme
  const getArticlesForTheme = (themeName) => {
    const theme = themeData[themeName];
    if (!theme) return [];
    return theme.articles
      .map((id) => articleData.find((article) => article.id === id))
      .filter(Boolean);
  };

  /***********************************************
   * 5) RENDER: THE THEMATIC DASHBOARD + GRAPH
   ***********************************************/
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Thematic Network Analysis</h2>

        {/* View Selector Tabs */}
        <div className="mb-6 border-b flex">
          <button
            className={`pb-3 px-4 transition-colours ${
              activeView === 'thematicAnalysis'
                ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveView('thematicAnalysis')}
          >
            Thematic Analysis
          </button>
          <button
            className={`pb-3 px-4 transition-colours ${
              activeView === 'networkGraph'
                ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveView('networkGraph')}
          >
            Interactive Network Graph
          </button>
        </div>

        {/* Thematic Analysis View */}
        {activeView === 'thematicAnalysis' && (
          <div>
            <p className="text-gray-600 mb-6">
              Analysing key themes in the Sudan–UAE ICJ case coverage, with evidence traced to specific articles.
            </p>

            {/* Themes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {Object.entries(themeData).map(([name, theme]) => (
                <div
                  key={theme.key}
                  className={`bg-white rounded-lg shadow-md p-4 cursor-pointer transition-colours hover:shadow-lg ${
                    selectedTheme === name ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                  }`}
                  onClick={() => setSelectedTheme(name === selectedTheme ? null : name)}
                >
                  <h3 className="font-semibold text-lg mb-1">{name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{theme.description}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {theme.subThemes.map((subTheme) => (
                      <span key={subTheme} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        {subTheme}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">
                    {theme.articles.length} articles | {theme.connections.length} connections
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Theme Details */}
            {selectedTheme && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6 border">
                <h3 className="text-xl font-semibold mb-3">{selectedTheme}</h3>
                <p className="text-gray-700 mb-4">{themeData[selectedTheme].description}</p>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Key Evidence:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    {themeData[selectedTheme].textEvidence.map((evidence, i) => (
                      <li key={i}>{evidence}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Related Themes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {themeData[selectedTheme].connections.map((connectedTheme) => (
                      <span
                        key={connectedTheme}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded cursor-pointer"
                        onClick={() => setSelectedTheme(connectedTheme)}
                      >
                        {connectedTheme}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Articles with this Theme:</h4>
                  <div className="space-y-3">
                    {getArticlesForTheme(selectedTheme).map((article) => (
                      <div
                        key={article.id}
                        className="bg-white border p-3 rounded cursor-pointer hover:bg-blue-50 transition-colours"
                        onClick={() => setSelectedArticle(article)}
                      >
                        <div className="flex justify-between items-start">
                          <h5 className="font-medium text-sm">{article.title}</h5>
                          <span className="text-xs text-gray-500">
                            {article.date.split('-')[2]}/{article.date.split('-')[1]}
                          </span>
                        </div>
                        <div className="text-xs text-gray-600 mt-1">{article.source}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Selected Article Details */}
            {selectedArticle && (
              <div className="bg-white rounded-lg shadow-md p-4 mb-6 border">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{selectedArticle.title}</h3>
                  <button
                    className="text-gray-400 hover:text-gray-600 transition-colours"
                    onClick={() => setSelectedArticle(null)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 
                        1 0 111.414 1.414L11.414 10l4.293 
                        4.293a1 1 0 01-1.414 1.414L10 
                        11.414l-4.293 4.293a1 1 
                        0 01-1.414-1.414L8.586 10 
                        4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  {selectedArticle.source} | {selectedArticle.date}
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Summary:</h4>
                  <p className="text-gray-700">{selectedArticle.summary}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Themes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedArticle.themes.map((theme) => (
                      <span key={theme} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Key Quotes:</h4>
                  <div className="space-y-2">
                    {selectedArticle.quotes.map((quote, index) => (
                      <div key={index} className="bg-gray-50 p-3 border-l-4 border-gray-300 text-sm italic">
                        "{quote}"
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 text-sm">
                  <a
                    href={selectedArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline transition-colours"
                  >
                    View original article
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Network Graph View */}
        {activeView === 'networkGraph' && (
          <div>
            <p className="text-gray-600 mb-4">
              Interactive visualisation of themes, subthemes and articles. Drag nodes to reposition,
              scroll to zoom and click nodes for details.
            </p>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Graph Container */}
              <div className="md:w-2/3">
                <div ref={networkRef} className="border rounded-lg bg-gray-50 relative w-full h-[600px]">
                  {/* Our D3 SVG */}
                  <svg ref={svgRef} className="absolute top-0 left-0" />

                  {/* Zoom Controls */}
                  <div className="absolute bottom-4 right-4 bg-white p-2 rounded shadow-sm text-xs flex items-center space-x-3">
                    <button
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded transition-colours"
                      onClick={() => {
                        // Reset the zoom/pan to initial state
                        const svg = d3.select(svgRef.current);
                        svg.call(
                          zoom.transform,
                          d3.zoomIdentity
                            .translate(dimensions.width / 3, dimensions.height / 3)
                            .scale(0.8)
                        );
                      }}
                    >
                      Reset View
                    </button>
                    <div>Zoom: {Math.round(transform.k * 100)}%</div>
                  </div>

                  {/* Graph Info */}
                  <div className="absolute top-4 left-4 bg-white p-2 rounded shadow-md text-xs max-w-xs">
                    <p className="font-medium text-sm mb-1">Network Insights:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Central themes (larger nodes) represent main narratives</li>
                      <li>Connected subthemes reveal component narratives</li>
                      <li>Solid lines indicate strong thematic connections</li>
                      <li>Dashed lines link themes to source articles</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Node Details Side Panel */}
              <div className="md:w-1/3">
                <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col">
                  <h3 className="text-lg font-semibold mb-3">Node Details</h3>

                  {!selectedTheme && !selectedArticle ? (
                    <div className="flex-1 flex items-center justify-center p-6 text-center text-gray-500">
                      <p>Click on a node in the network graph to view details</p>
                    </div>
                  ) : selectedTheme ? (
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">{selectedTheme}</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {themeData[selectedTheme].description}
                        </p>
                      </div>

                      <div>
                        <h5 className="text-sm font-medium text-gray-700">Sub-Themes:</h5>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {themeData[selectedTheme].subThemes.map((subTheme) => (
                            <span key={subTheme} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                              {subTheme}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-medium text-gray-700">Related Themes:</h5>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {themeData[selectedTheme].connections.map((t) => (
                            <span key={t} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-medium text-gray-700">Related Articles:</h5>
                        <ul className="text-sm space-y-1 mt-1">
                          {getArticlesForTheme(selectedTheme).map((article) => (
                            <li key={article.id} className="truncate">
                              <button
                                className="text-blue-600 hover:underline text-left truncate w-full text-xs transition-colours"
                                onClick={() => setSelectedArticle(article)}
                              >
                                {article.source}: {article.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    selectedArticle && (
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium truncate">{selectedArticle.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {selectedArticle.source} | {selectedArticle.date}
                          </p>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium text-gray-700">Themes:</h5>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {selectedArticle.themes.map((theme) => (
                              <span
                                key={theme}
                                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                              >
                                {theme}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium text-gray-700">Summary:</h5>
                          <p className="text-xs text-gray-600 mt-1">{selectedArticle.summary}</p>
                        </div>

                        <div className="mt-auto">
                          <a
                            href={selectedArticle.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:underline transition-colours"
                          >
                            View original article
                          </a>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Insights */}
            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Network Analysis Insights:</h3>
              <div className="text-sm space-y-3">
                <p>This network reveals key patterns in the thematic structure of coverage:</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>
                    <strong>Central Themes</strong>: 
                    {' '}<span className="text-blue-600">Legal Process</span> and 
                    {' '}<span className="text-red-600">Genocide Allegations</span> 
                    {' '}anchor the network.
                  </li>
                  <li>
                    <strong>Theme Clusters</strong>: A legal–procedural cluster and a contextual–political cluster, 
                    with <span className="text-yellow-600">UAE Support for RSF</span> bridging them.
                  </li>
                  <li>
                    <strong>Evolving Connections</strong>: Later articles link 
                    {' '}<span className="text-green-600">Economic Interests</span> 
                    {' '}and <span className="text-purple-600">Regional Geopolitics</span>.
                  </li>
                  <li>
                    <strong>Article Distribution</strong>: Mainstream outlets connect multiple themes, 
                    while niche sources focus on specific areas.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThematicNetworkAnalysis;
























































