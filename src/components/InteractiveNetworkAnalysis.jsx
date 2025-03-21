// import React, { useEffect, useRef, useState } from 'react';

// const InteractiveNetworkAnalysis = () => {
//   // State for selected elements and info panel
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [nodeDetails, setNodeDetails] = useState(null);
  
//   // Container ref for the visualization
//   const containerRef = useRef(null);
  
//   // Mock data for the network visualization
//   const mockNetworkData = {
//     nodes: [
//       // Main themes (larger nodes)
//       { id: "legal-process", label: "Legal Process", type: "theme", size: 25, color: "#3b82f6" },
//       { id: "genocide-allegations", label: "Genocide Allegations", type: "theme", size: 25, color: "#ef4444" },
//       { id: "uae-support", label: "UAE Support for RSF", type: "theme", size: 25, color: "#f59e0b" },
//       { id: "humanitarian-crisis", label: "Humanitarian Crisis", type: "theme", size: 25, color: "#10b981" },
//       { id: "economic-interests", label: "Economic Interests", type: "theme", size: 25, color: "#6366f1" },
//       { id: "regional-geopolitics", label: "Regional Geopolitics", type: "theme", size: 25, color: "#8b5cf6" },
      
//       // Subthemes (medium nodes)
//       { id: "icj-filing", label: "ICJ Filing", type: "subtheme", parent: "legal-process", size: 15, color: "#93c5fd" },
//       { id: "icj-jurisdiction", label: "ICJ Jurisdiction", type: "subtheme", parent: "legal-process", size: 15, color: "#93c5fd" },
//       { id: "genocide-convention", label: "Genocide Convention", type: "subtheme", parent: "legal-process", size: 15, color: "#93c5fd" },
      
//       { id: "masalit-targeting", label: "Masalit Targeting", type: "subtheme", parent: "genocide-allegations", size: 15, color: "#fca5a5" },
//       { id: "west-darfur", label: "West Darfur Atrocities", type: "subtheme", parent: "genocide-allegations", size: 15, color: "#fca5a5" },
      
//       { id: "weapons-supply", label: "Weapons Supply", type: "subtheme", parent: "uae-support", size: 15, color: "#fcd34d" },
//       { id: "financial-support", label: "Financial Support", type: "subtheme", parent: "uae-support", size: 15, color: "#fcd34d" },
      
//       { id: "displaced-persons", label: "Displaced Persons", type: "subtheme", parent: "humanitarian-crisis", size: 15, color: "#a7f3d0" },
//       { id: "civilian-casualties", label: "Civilian Casualties", type: "subtheme", parent: "humanitarian-crisis", size: 15, color: "#a7f3d0" },
      
//       { id: "gold-trade", label: "Gold Trade", type: "subtheme", parent: "economic-interests", size: 15, color: "#a5b4fc" },
//       { id: "agricultural-land", label: "Agricultural Land", type: "subtheme", parent: "economic-interests", size: 15, color: "#a5b4fc" },
      
//       { id: "power-dynamics", label: "Power Dynamics", type: "subtheme", parent: "regional-geopolitics", size: 15, color: "#c4b5fd" },
//       { id: "territorial-control", label: "Territorial Control", type: "subtheme", parent: "regional-geopolitics", size: 15, color: "#c4b5fd" },
      
//       // Articles (smaller nodes)
//       { id: "article-1", label: "Al Jazeera (06/03)", type: "article", source: "Al Jazeera", date: "2025-03-06", size: 10, color: "#f59e0b" },
//       { id: "article-5", label: "Religion Unplugged (11/03)", type: "article", source: "Religion Unplugged", date: "2025-03-11", size: 10, color: "#f59e0b" },
//       { id: "article-12", label: "France 24 (08/03)", type: "article", source: "France 24", date: "2025-03-08", size: 10, color: "#f59e0b" },
//       { id: "article-14", label: "Forbes (09/03)", type: "article", source: "Forbes", date: "2025-03-09", size: 10, color: "#f59e0b" },
//       { id: "article-24", label: "Opinio Juris (14/03)", type: "article", source: "Opinio Juris", date: "2025-03-14", size: 10, color: "#f59e0b" },
//       { id: "article-30", label: "Deutsche Welle (15/03)", type: "article", source: "Deutsche Welle", date: "2025-03-15", size: 10, color: "#f59e0b" },
//       { id: "article-38", label: "Nation Africa (16/03)", type: "article", source: "Nation Africa", date: "2025-03-16", size: 10, color: "#f59e0b" },
//       { id: "article-39", label: "Al-Estiklal (16/03)", type: "article", source: "Al-Estiklal", date: "2025-03-16", size: 10, color: "#f59e0b" }
//     ],
//     links: [
//       // Theme to theme connections
//       { source: "legal-process", target: "genocide-allegations", strength: 0.7, type: "theme-theme" },
//       { source: "legal-process", target: "uae-support", strength: 0.7, type: "theme-theme" },
//       { source: "genocide-allegations", target: "humanitarian-crisis", strength: 0.7, type: "theme-theme" },
//       { source: "genocide-allegations", target: "uae-support", strength: 0.7, type: "theme-theme" },
//       { source: "uae-support", target: "economic-interests", strength: 0.7, type: "theme-theme" },
//       { source: "uae-support", target: "regional-geopolitics", strength: 0.7, type: "theme-theme" },
//       { source: "humanitarian-crisis", target: "regional-geopolitics", strength: 0.7, type: "theme-theme" },
//       { source: "economic-interests", target: "regional-geopolitics", strength: 0.7, type: "theme-theme" },
      
//       // Theme to subtheme connections
//       { source: "legal-process", target: "icj-filing", strength: 0.9, type: "theme-subtheme" },
//       { source: "legal-process", target: "icj-jurisdiction", strength: 0.9, type: "theme-subtheme" },
//       { source: "legal-process", target: "genocide-convention", strength: 0.9, type: "theme-subtheme" },
      
//       { source: "genocide-allegations", target: "masalit-targeting", strength: 0.9, type: "theme-subtheme" },
//       { source: "genocide-allegations", target: "west-darfur", strength: 0.9, type: "theme-subtheme" },
      
//       { source: "uae-support", target: "weapons-supply", strength: 0.9, type: "theme-subtheme" },
//       { source: "uae-support", target: "financial-support", strength: 0.9, type: "theme-subtheme" },
      
//       { source: "humanitarian-crisis", target: "displaced-persons", strength: 0.9, type: "theme-subtheme" },
//       { source: "humanitarian-crisis", target: "civilian-casualties", strength: 0.9, type: "theme-subtheme" },
      
//       { source: "economic-interests", target: "gold-trade", strength: 0.9, type: "theme-subtheme" },
//       { source: "economic-interests", target: "agricultural-land", strength: 0.9, type: "theme-subtheme" },
      
//       { source: "regional-geopolitics", target: "power-dynamics", strength: 0.9, type: "theme-subtheme" },
//       { source: "regional-geopolitics", target: "territorial-control", strength: 0.9, type: "theme-subtheme" },
      
//       // Theme to article connections
//       { source: "legal-process", target: "article-1", strength: 0.5, type: "theme-article" },
//       { source: "legal-process", target: "article-5", strength: 0.5, type: "theme-article" },
//       { source: "legal-process", target: "article-14", strength: 0.5, type: "theme-article" },
//       { source: "legal-process", target: "article-24", strength: 0.5, type: "theme-article" },
      
//       { source: "genocide-allegations", target: "article-1", strength: 0.5, type: "theme-article" },
//       { source: "genocide-allegations", target: "article-5", strength: 0.5, type: "theme-article" },
//       { source: "genocide-allegations", target: "article-39", strength: 0.5, type: "theme-article" },
      
//       { source: "uae-support", target: "article-1", strength: 0.5, type: "theme-article" },
//       { source: "uae-support", target: "article-12", strength: 0.5, type: "theme-article" },
//       { source: "uae-support", target: "article-39", strength: 0.5, type: "theme-article" },
      
//       { source: "humanitarian-crisis", target: "article-30", strength: 0.5, type: "theme-article" },
      
//       { source: "economic-interests", target: "article-38", strength: 0.5, type: "theme-article" },
      
//       { source: "regional-geopolitics", target: "article-12", strength: 0.5, type: "theme-article" },
//       { source: "regional-geopolitics", target: "article-30", strength: 0.5, type: "theme-article" },
//       { source: "regional-geopolitics", target: "article-38", strength: 0.5, type: "theme-article" },
      
//       // Subtheme connections
//       { source: "masalit-targeting", target: "west-darfur", strength: 0.8, type: "subtheme-subtheme" },
//       { source: "weapons-supply", target: "financial-support", strength: 0.8, type: "subtheme-subtheme" },
//       { source: "displaced-persons", target: "civilian-casualties", strength: 0.8, type: "subtheme-subtheme" },
//       { source: "gold-trade", target: "financial-support", strength: 0.8, type: "subtheme-subtheme" },
//       { source: "power-dynamics", target: "territorial-control", strength: 0.8, type: "subtheme-subtheme" }
//     ]
//   };
  
//   // Article data
//   const articleDetails = {
//     "article-1": {
//       title: "Sudan files case against UAE at top UN court over 'complicity in genocide'",
//       source: "Al Jazeera",
//       date: "2025-03-06",
//       url: "https://www.aljazeera.com/news/2025/3/6/sudan-files-case-against-uae-at-top-un-court-over-complicity-in-genocide",
//       summary: "Sudan files a case against the UAE at the ICJ, accusing it of supporting the RSF which is implicated in genocide against the Masalit people.",
//       themes: ["ICJ Filing", "Genocide Allegations", "UAE Support for RSF"]
//     },
//     "article-5": {
//       title: "Sudan Takes UAE to World Court Over Alleged Complicity in Genocide",
//       source: "Religion Unplugged",
//       date: "2025-03-11",
//       url: "https://religionunplugged.com/news/2025/3/11/sudan-takes-uae-to-world-court-over-alleged-complicity-in-genocide",
//       summary: "Sudan files case against UAE at ICJ, focusing on atrocities against the Masalit group in West Darfur.",
//       themes: ["Genocide Allegations", "Masalit Targeting", "ICJ Jurisdiction"]
//     },
//     "article-12": {
//       title: "What is the UAE's involvement in war-torn Sudan?",
//       source: "France 24",
//       date: "2025-03-08",
//       url: "https://www.france24.com/en/live-news/20250308-what-is-the-uae-s-involvement-in-war-torn-sudan",
//       summary: "Analysis of UAE's alleged involvement in Sudan conflict, examining weapons supply and strategic interests.",
//       themes: ["UAE Support for RSF", "Weapons Supply", "Regional Geopolitics"]
//     },
//     "article-14": {
//       title: "Sudan Takes UAE To World Court Over Alleged Complicity In Genocide",
//       source: "Forbes",
//       date: "2025-03-09",
//       url: "https://www.forbes.com/sites/ewelinaochab/2025/03/09/sudan-takes-uae-to-world-court-over-alleged-complicity-in-genocide/",
//       summary: "Legal analysis of Sudan's ICJ filing against UAE under the Genocide Convention.",
//       themes: ["ICJ Process", "Genocide Convention", "Legal Precedent"]
//     },
//     "article-24": {
//       title: "Art. IX Reservations to the Genocide Convention Are Here to Stay? A Response to Diamond",
//       source: "Opinio Juris",
//       date: "2025-03-14",
//       url: "https://opiniojuris.org/2025/03/14/art-ix-reservations-to-the-genocide-convention-are-here-to-stay-a-response-to-diamond/",
//       summary: "Analysis of UAE's reservation to Article IX of the Genocide Convention and implications for ICJ jurisdiction.",
//       themes: ["ICJ Jurisdiction", "Genocide Convention", "Legal Analysis"]
//     },
//     "article-30": {
//       title: "Could Sudan be split into two countries?",
//       source: "Deutsche Welle",
//       date: "2025-03-15",
//       url: "https://www.dw.com/en/could-sudan-be-split-into-two-countries/a-71923002",
//       summary: "Analysis of potential partition of Sudan amid ongoing civil conflict between SAF and RSF.",
//       themes: ["Humanitarian Crisis", "Regional Geopolitics", "Territorial Control"]
//     },
//     "article-38": {
//       title: "Sudan's war: What's driving UAE and Saudi Arabia interests?",
//       source: "Nation Africa",
//       date: "2025-03-16",
//       url: "https://nation.africa/kenya/news/africa/sudan-s-war-what-s-driving-uae-and-saudi-arabia-interests--4966818",
//       summary: "Analysis of UAE's economic interests in Sudan, particularly gold mining and agricultural investments.",
//       themes: ["Economic Interests", "Gold Trade", "Regional Geopolitics"]
//     },
//     "article-39": {
//       title: "UAE-Backed RSF Militia's Genocide Against the Masalit Tribe in Darfur",
//       source: "Al-Estiklal",
//       date: "2025-03-16",
//       url: "https://www.alestiklal.net/en/article/uae-backed-rsf-militia-s-genocide-against-the-masalit-tribe-in-darfur",
//       summary: "Detailed report on alleged genocide against Masalit tribe by RSF with UAE support.",
//       themes: ["Genocide Allegations", "Masalit Targeting", "UAE Support for RSF"]
//     }
//   };
  
//   // Theme descriptions
//   const themeDescriptions = {
//     "legal-process": "Coverage focused on legal procedures, ICJ processes, and jurisdictional questions",
//     "genocide-allegations": "Coverage of alleged genocide against the Masalit people and other atrocities in Darfur",
//     "uae-support": "Allegations of UAE providing weapons, financial and political support to the RSF",
//     "humanitarian-crisis": "Coverage of civilian casualties, displacement, and humanitarian impacts of the conflict",
//     "economic-interests": "Focus on economic motivations and resource control as drivers of the conflict",
//     "regional-geopolitics": "Analysis of broader regional implications and strategic interests at play",
//     "icj-filing": "Reports on Sudan's initial filing of the case at the ICJ",
//     "icj-jurisdiction": "Analysis of jurisdiction issues, particularly UAE's reservations to the Genocide Convention",
//     "genocide-convention": "Discussion of the Genocide Convention's application and interpretation",
//     "masalit-targeting": "Specific coverage of alleged targeting of the Masalit ethnic group",
//     "west-darfur": "Coverage of atrocities in the West Darfur region",
//     "weapons-supply": "Allegations of UAE supplying weapons to the RSF",
//     "financial-support": "Coverage of UAE's alleged financial backing of the RSF",
//     "displaced-persons": "Reports on people displaced by the conflict",
//     "civilian-casualties": "Coverage of civilian deaths and injuries",
//     "gold-trade": "Analysis of gold trade as an economic motivation",
//     "agricultural-land": "Discussion of agricultural land interests",
//     "power-dynamics": "Analysis of regional power dynamics",
//     "territorial-control": "Coverage of territorial control issues and potential partition"
//   };
  
//   useEffect(() => {
//     // Import D3 dynamically to ensure it's available in browser environment
//     const loadD3AndInitializeGraph = async () => {
//       try {
//         // Dynamic import of D3
//         const d3Module = await import('d3');
//         const d3 = d3Module.default || d3Module;
        
//         // Clear any existing visualizations
//         d3.select(containerRef.current).selectAll("*").remove();
        
//         // Get container dimensions
//         const width = containerRef.current.clientWidth;
//         const height = containerRef.current.clientHeight;
        
//         // Create SVG
//         const svg = d3.select(containerRef.current)
//           .append("svg")
//           .attr("width", width)
//           .attr("height", height)
//           .attr("viewBox", [0, 0, width, height]);
        
//         // Create container group for zoom/pan
//         const g = svg.append("g");
        
//         // Add zoom behavior
//         const zoom = d3.zoom()
//           .scaleExtent([0.1, 4])
//           .on("zoom", (event) => {
//             g.attr("transform", event.transform);
//           });
        
//         svg.call(zoom);
        
//         // Initialize with slight zoom to see more of the network
//         svg.call(zoom.transform, d3.zoomIdentity.translate(width/3, height/3).scale(0.9));
        
//         // Create link elements
//         const links = g.append("g")
//           .attr("class", "links")
//           .selectAll("line")
//           .data(mockNetworkData.links)
//           .enter().append("line")
//           .attr("stroke-width", d => {
//             if (d.type === 'theme-theme') return 3;
//             if (d.type === 'theme-subtheme') return 2;
//             if (d.type === 'subtheme-subtheme') return 1.5;
//             return 1;
//           })
//           .attr("stroke", d => {
//             if (d.type === 'theme-theme') return "#6b7280";
//             if (d.type === 'theme-subtheme') return "#93c5fd";
//             if (d.type === 'subtheme-subtheme') return "#cbd5e1";
//             return "#d1d5db";
//           })
//           .attr("stroke-opacity", 0.6)
//           .attr("stroke-dasharray", d => d.type === 'theme-article' ? "3,3" : null);
        
//         // Create node elements
//         const nodes = g.append("g")
//           .attr("class", "nodes")
//           .selectAll("g")
//           .data(mockNetworkData.nodes)
//           .enter().append("g")
//           .attr("class", "node")
//           .on("click", (event, d) => {
//             event.stopPropagation();
//             setSelectedNode(d.id);
            
//             if (d.type === 'article') {
//               setNodeDetails(articleDetails[d.id]);
//             } else {
//               setNodeDetails({
//                 title: d.label,
//                 type: d.type,
//                 description: themeDescriptions[d.id]
//               });
//             }
//           })
//           .call(d3.drag()
//             .on("start", dragstarted)
//             .on("drag", dragged)
//             .on("end", dragended));
        
//         // Add circles to nodes
//         nodes.append("circle")
//           .attr("r", d => d.size)
//           .attr("fill", d => d.color)
//           .attr("stroke", "#fff")
//           .attr("stroke-width", 1.5);
        
//         // Add labels to nodes
//         nodes.append("text")
//           .attr("dy", d => {
//             return d.type === 'theme' ? -30 : -15;
//           })
//           .attr("text-anchor", "middle")
//           .attr("font-size", d => {
//             if (d.type === 'theme') return "12px";
//             if (d.type === 'subtheme') return "10px";
//             return "8px";
//           })
//           .attr("font-weight", d => d.type === 'theme' ? "bold" : "normal")
//           .text(d => d.label);
        
//         // Create simulation
//         const simulation = d3.forceSimulation(mockNetworkData.nodes)
//           .force("link", d3.forceLink(mockNetworkData.links)
//             .id(d => d.id)
//             .distance(d => {
//               if (d.type === 'theme-subtheme') return 80;
//               if (d.type === 'theme-article') return 150;
//               if (d.type === 'subtheme-subtheme') return 50;
//               return 200; // theme-theme connections
//             })
//             .strength(d => d.strength))
//           .force("charge", d3.forceManyBody().strength(-400))
//           .force("center", d3.forceCenter(width / 2, height / 2))
//           .force("collision", d3.forceCollide().radius(d => d.size * 1.5));
        
//         // Update positions on simulation tick
//         simulation.on("tick", () => {
//           links
//             .attr("x1", d => d.source.x)
//             .attr("y1", d => d.source.y)
//             .attr("x2", d => d.target.x)
//             .attr("y2", d => d.target.y);
          
//           nodes
//             .attr("transform", d => `translate(${d.x}, ${d.y})`);
//         });
        
//         // Drag functions
//         function dragstarted(event, d) {
//           if (!event.active) simulation.alphaTarget(0.3).restart();
//           d.fx = d.x;
//           d.fy = d.y;
//         }
        
//         function dragged(event, d) {
//           d.fx = event.x;
//           d.fy = event.y;
//         }
        
//         function dragended(event, d) {
//           if (!event.active) simulation.alphaTarget(0);
//           d.fx = null;
//           d.fy = null;
//         }
        
//         // Add click listener to clear selection when clicking on the background
//         svg.on("click", () => {
//           setSelectedNode(null);
//           setNodeDetails(null);
//         });
        
//         // Add legend
//         const legend = svg.append("g")
//           .attr("transform", `translate(20, ${height - 100})`);
        
//         const legendItems = [
//           { type: 'theme', label: 'Main Theme', color: "#3b82f6", size: 8 },
//           { type: 'subtheme', label: 'Sub-Theme', color: "#10b981", size: 6 },
//           { type: 'article', label: 'Article', color: "#f59e0b", size: 4 }
//         ];
        
//         legendItems.forEach((item, i) => {
//           const legendItem = legend.append("g")
//             .attr("transform", `translate(0, ${i * 20})`);
          
//           legendItem.append("circle")
//             .attr("r", item.size)
//             .attr("fill", item.color);
          
//           legendItem.append("text")
//             .attr("x", 15)
//             .attr("y", 4)
//             .attr("font-size", "10px")
//             .text(item.label);
//         });
        
//         // Reset zoom button
//         const resetButton = svg.append("g")
//           .attr("transform", `translate(${width - 100}, 30)`)
//           .attr("cursor", "pointer")
//           .on("click", (event) => {
//             event.stopPropagation();
//             svg.transition().duration(750).call(
//               zoom.transform,
//               d3.zoomIdentity.translate(width/3, height/3).scale(0.9)
//             );
//           });
        
//         resetButton.append("rect")
//           .attr("width", 80)
//           .attr("height", 30)
//           .attr("rx", 5)
//           .attr("fill", "white")
//           .attr("stroke", "#d1d5db");
        
//         resetButton.append("text")
//           .attr("x", 40)
//           .attr("y", 18)
//           .attr("text-anchor", "middle")
//           .attr("font-size", "12px")
//           .text("Reset View");
//       } catch (error) {
//         console.error("Error initializing network graph:", error);
//       }
//     };
    
//     // Load D3 and initialize the graph when the component mounts
//     loadD3AndInitializeGraph();
    
//     // Cleanup function
//     return () => {
//       if (containerRef.current) {
//         containerRef.current.innerHTML = '';
//       }
//     };
//   }, []); // Empty dependency array ensures this runs once on mount
  
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-4 max-w-full mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Sudan-UAE ICJ Case: Network Analysis</h2>
      
//       <div className="flex flex-col md:flex-row h-[800px]">
//         {/* Main network visualization area - larger size */}
//         <div className="md:w-3/4 h-full relative">
//           <div 
//             ref={containerRef} 
//             className="w-full h-full border rounded-lg bg-gray-50"
//           >
//             {/* D3 will render here */}
//           </div>
          
//           <div className="absolute top-4 left-4 bg-white p-3 rounded shadow-md text-xs max-w-xs">
//             <p className="font-semibold text-sm mb-1">Interaction Guide:</p>
//             <ul className="list-disc pl-4 space-y-1">
//               <li>Drag nodes to reposition</li>
//               <li>Scroll to zoom in/out</li>
//               <li>Click nodes for details</li>
//               <li>Drag canvas to pan</li>
//               <li>Click "Reset View" to recenter</li>
//             </ul>
//           </div>
//         </div>
        
//         {/* Details panel */}
//         <div className="md:w-1/4 h-full md:ml-4 mt-4 md:mt-0">
//           <div className="border rounded-lg h-full p-4 overflow-auto">
//             <h3 className="text-xl font-bold mb-4">Node Details</h3>
            
//             {!nodeDetails ? (
//               <div className="h-full flex items-center justify-center p-6 text-center text-gray-500">
//                 <p>Click on a node in the network to view details</p>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 <div>
//                   <h4 className="font-semibold text-lg">{nodeDetails.title}</h4>
//                   {nodeDetails.type === 'article' ? (
//                     <div className="text-sm text-gray-600 mt-1">
//                       {nodeDetails.source} | {nodeDetails.date}
//                     </div>
//                   ) : (
//                     <div className="text-sm capitalize text-blue-600 font-medium mt-1">
//                       {nodeDetails.type}
//                     </div>
//                   )}
//                 </div>
                
//                 <div>
//                   <h5 className="font-medium text-gray-700">Description:</h5>
//                   <p className="text-sm text-gray-600 mt-1">{nodeDetails.description || nodeDetails.summary}</p>
//                 </div>
                
//                 {nodeDetails.themes && (
//                   <div>
//                     <h5 className="font-medium text-gray-700">Themes:</h5>
//                     <div className="flex flex-wrap gap-1 mt-1">
//                       {nodeDetails.themes.map(theme => (
//                         <span key={theme} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
//                           {theme}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 )}
                
//                 {nodeDetails.url && (
//                   <div className="mt-6">
//                     <a 
//                       href={nodeDetails.url} 
//                       target="_blank" 
//                       rel="noopener noreferrer" 
//                       className="text-blue-600 hover:underline text-sm"
//                     >
//                       View original article →
//                     </a>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
      
//       {/* Analysis insights */}
//       <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//         <h3 className="text-lg font-bold mb-2">Network Analysis Insights</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
//           <div>
//             <h4 className="font-medium text-gray-800 mb-1">Structural Patterns:</h4>
//             <ul className="list-disc pl-4 space-y-1 text-gray-700">
//               <li>
//                 <strong>Central Themes</strong>: Legal Process and Genocide Allegations form the core narratives with highest connectivity
//               </li>
//               <li>
//                 <strong>Bridge Themes</strong>: UAE Support for RSF acts as a bridge between legal and geopolitical narratives
//               </li>
//               <li>
//                 <strong>Peripheral Themes</strong>: Economic Interests emerges latest in the coverage, connecting primarily to Regional Geopolitics
//               </li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="font-medium text-gray-800 mb-1">Thematic Insights:</h4>
//             <ul className="list-disc pl-4 space-y-1 text-gray-700">
//               <li>
//                 <strong>Theme Clusters</strong>: Two main clusters emerge - legal/evidence-focused and contextual/political
//               </li>
//               <li>
//                 <strong>Subtheme Connections</strong>: Masalit Targeting connects genocide allegations to humanitarian concerns
//               </li>
//               <li>
//                 <strong>Article Distribution</strong>: Earlier articles (March 6-9) focus on legal process, while later articles (March 14-16) provide context
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="mt-4">
//           <h4 className="font-medium text-gray-800 mb-1">Evolving Narrative:</h4>
//           <p className="text-gray-700">
//             The network reveals a clear progression from initial focus on the ICJ filing to deeper examination of specific allegations. 
//             UAE support allegations form a consistent thread throughout, acting as a connection point between procedural aspects and 
//             substantive claims. Later articles introduce economic and geopolitical dimensions, creating a more complex narrative web that 
//             contextualizes the legal proceedings within broader regional dynamics.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InteractiveNetworkAnalysis;




















import React, { useEffect, useRef, useState } from 'react';

const InteractiveNetworkAnalysis = () => {
  // State for the selected node and its detailed information
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodeDetails, setNodeDetails] = useState(null);

  // Reference for the network visualisation container
  const containerRef = useRef(null);

  // Mock data for the network visualisation
  const mockNetworkData = {
    nodes: [
      // Main themes (larger nodes)
      { id: "legal-process", label: "Legal Process", type: "theme", size: 25, color: "#3b82f6" },
      { id: "genocide-allegations", label: "Genocide Allegations", type: "theme", size: 25, color: "#ef4444" },
      { id: "uae-support", label: "UAE Support for RSF", type: "theme", size: 25, color: "#f59e0b" },
      { id: "humanitarian-crisis", label: "Humanitarian Crisis", type: "theme", size: 25, color: "#10b981" },
      { id: "economic-interests", label: "Economic Interests", type: "theme", size: 25, color: "#6366f1" },
      { id: "regional-geopolitics", label: "Regional Geopolitics", type: "theme", size: 25, color: "#8b5cf6" },
      
      // Subthemes (medium nodes)
      { id: "icj-filing", label: "ICJ Filing", type: "subtheme", parent: "legal-process", size: 15, color: "#93c5fd" },
      { id: "icj-jurisdiction", label: "ICJ Jurisdiction", type: "subtheme", parent: "legal-process", size: 15, color: "#93c5fd" },
      { id: "genocide-convention", label: "Genocide Convention", type: "subtheme", parent: "legal-process", size: 15, color: "#93c5fd" },
      
      { id: "masalit-targeting", label: "Masalit Targeting", type: "subtheme", parent: "genocide-allegations", size: 15, color: "#fca5a5" },
      { id: "west-darfur", label: "West Darfur Atrocities", type: "subtheme", parent: "genocide-allegations", size: 15, color: "#fca5a5" },
      
      { id: "weapons-supply", label: "Weapons Supply", type: "subtheme", parent: "uae-support", size: 15, color: "#fcd34d" },
      { id: "financial-support", label: "Financial Support", type: "subtheme", parent: "uae-support", size: 15, color: "#fcd34d" },
      
      { id: "displaced-persons", label: "Displaced Persons", type: "subtheme", parent: "humanitarian-crisis", size: 15, color: "#a7f3d0" },
      { id: "civilian-casualties", label: "Civilian Casualties", type: "subtheme", parent: "humanitarian-crisis", size: 15, color: "#a7f3d0" },
      
      { id: "gold-trade", label: "Gold Trade", type: "subtheme", parent: "economic-interests", size: 15, color: "#a5b4fc" },
      { id: "agricultural-land", label: "Agricultural Land", type: "subtheme", parent: "economic-interests", size: 15, color: "#a5b4fc" },
      
      { id: "power-dynamics", label: "Power Dynamics", type: "subtheme", parent: "regional-geopolitics", size: 15, color: "#c4b5fd" },
      { id: "territorial-control", label: "Territorial Control", type: "subtheme", parent: "regional-geopolitics", size: 15, color: "#c4b5fd" },
      
      // Articles (smaller nodes)
      { id: "article-1", label: "Al Jazeera (06/03)", type: "article", source: "Al Jazeera", date: "2025-03-06", size: 10, color: "#f59e0b" },
      { id: "article-5", label: "Religion Unplugged (11/03)", type: "article", source: "Religion Unplugged", date: "2025-03-11", size: 10, color: "#f59e0b" },
      { id: "article-12", label: "France 24 (08/03)", type: "article", source: "France 24", date: "2025-03-08", size: 10, color: "#f59e0b" },
      { id: "article-14", label: "Forbes (09/03)", type: "article", source: "Forbes", date: "2025-03-09", size: 10, color: "#f59e0b" },
      { id: "article-24", label: "Opinio Juris (14/03)", type: "article", source: "Opinio Juris", date: "2025-03-14", size: 10, color: "#f59e0b" },
      { id: "article-30", label: "Deutsche Welle (15/03)", type: "article", source: "Deutsche Welle", date: "2025-03-15", size: 10, color: "#f59e0b" },
      { id: "article-38", label: "Nation Africa (16/03)", type: "article", source: "Nation Africa", date: "2025-03-16", size: 10, color: "#f59e0b" },
      { id: "article-39", label: "Al-Estiklal (16/03)", type: "article", source: "Al-Estiklal", date: "2025-03-16", size: 10, color: "#f59e0b" }
    ],
    links: [
      // Theme-to-theme connections
      { source: "legal-process", target: "genocide-allegations", strength: 0.7, type: "theme-theme" },
      { source: "legal-process", target: "uae-support", strength: 0.7, type: "theme-theme" },
      { source: "genocide-allegations", target: "humanitarian-crisis", strength: 0.7, type: "theme-theme" },
      { source: "genocide-allegations", target: "uae-support", strength: 0.7, type: "theme-theme" },
      { source: "uae-support", target: "economic-interests", strength: 0.7, type: "theme-theme" },
      { source: "uae-support", target: "regional-geopolitics", strength: 0.7, type: "theme-theme" },
      { source: "humanitarian-crisis", target: "regional-geopolitics", strength: 0.7, type: "theme-theme" },
      { source: "economic-interests", target: "regional-geopolitics", strength: 0.7, type: "theme-theme" },
      
      // Theme-to-subtheme connections
      { source: "legal-process", target: "icj-filing", strength: 0.9, type: "theme-subtheme" },
      { source: "legal-process", target: "icj-jurisdiction", strength: 0.9, type: "theme-subtheme" },
      { source: "legal-process", target: "genocide-convention", strength: 0.9, type: "theme-subtheme" },
      
      { source: "genocide-allegations", target: "masalit-targeting", strength: 0.9, type: "theme-subtheme" },
      { source: "genocide-allegations", target: "west-darfur", strength: 0.9, type: "theme-subtheme" },
      
      { source: "uae-support", target: "weapons-supply", strength: 0.9, type: "theme-subtheme" },
      { source: "uae-support", target: "financial-support", strength: 0.9, type: "theme-subtheme" },
      
      { source: "humanitarian-crisis", target: "displaced-persons", strength: 0.9, type: "theme-subtheme" },
      { source: "humanitarian-crisis", target: "civilian-casualties", strength: 0.9, type: "theme-subtheme" },
      
      { source: "economic-interests", target: "gold-trade", strength: 0.9, type: "theme-subtheme" },
      { source: "economic-interests", target: "agricultural-land", strength: 0.9, type: "theme-subtheme" },
      
      { source: "regional-geopolitics", target: "power-dynamics", strength: 0.9, type: "theme-subtheme" },
      { source: "regional-geopolitics", target: "territorial-control", strength: 0.9, type: "theme-subtheme" },
      
      // Theme-to-article connections
      { source: "legal-process", target: "article-1", strength: 0.5, type: "theme-article" },
      { source: "legal-process", target: "article-5", strength: 0.5, type: "theme-article" },
      { source: "legal-process", target: "article-14", strength: 0.5, type: "theme-article" },
      { source: "legal-process", target: "article-24", strength: 0.5, type: "theme-article" },
      
      { source: "genocide-allegations", target: "article-1", strength: 0.5, type: "theme-article" },
      { source: "genocide-allegations", target: "article-5", strength: 0.5, type: "theme-article" },
      { source: "genocide-allegations", target: "article-39", strength: 0.5, type: "theme-article" },
      
      { source: "uae-support", target: "article-1", strength: 0.5, type: "theme-article" },
      { source: "uae-support", target: "article-12", strength: 0.5, type: "theme-article" },
      { source: "uae-support", target: "article-39", strength: 0.5, type: "theme-article" },
      
      { source: "humanitarian-crisis", target: "article-30", strength: 0.5, type: "theme-article" },
      
      { source: "economic-interests", target: "article-38", strength: 0.5, type: "theme-article" },
      
      { source: "regional-geopolitics", target: "article-12", strength: 0.5, type: "theme-article" },
      { source: "regional-geopolitics", target: "article-30", strength: 0.5, type: "theme-article" },
      { source: "regional-geopolitics", target: "article-38", strength: 0.5, type: "theme-article" },
      
      // Subtheme-to-subtheme connections
      { source: "masalit-targeting", target: "west-darfur", strength: 0.8, type: "subtheme-subtheme" },
      { source: "weapons-supply", target: "financial-support", strength: 0.8, type: "subtheme-subtheme" },
      { source: "displaced-persons", target: "civilian-casualties", strength: 0.8, type: "subtheme-subtheme" },
      { source: "gold-trade", target: "financial-support", strength: 0.8, type: "subtheme-subtheme" },
      { source: "power-dynamics", target: "territorial-control", strength: 0.8, type: "subtheme-subtheme" }
    ]
  };

  // Article details data
  const articleDetails = {
    "article-1": {
      title: "Sudan files case against UAE at top UN court over 'complicity in genocide'",
      source: "Al Jazeera",
      date: "2025-03-06",
      url: "https://www.aljazeera.com/news/2025/3/6/sudan-files-case-against-uae-at-top-un-court-over-complicity-in-genocide",
      summary: "Sudan files a case against the UAE at the ICJ, accusing it of supporting the RSF implicated in genocide against the Masalit people.",
      themes: ["ICJ Filing", "Genocide Allegations", "UAE Support for RSF"]
    },
    "article-5": {
      title: "Sudan Takes UAE to World Court Over Alleged Complicity in Genocide",
      source: "Religion Unplugged",
      date: "2025-03-11",
      url: "https://religionunplugged.com/news/2025/3/11/sudan-takes-uae-to-world-court-over-alleged-complicity-in-genocide",
      summary: "Sudan files a case against the UAE at the ICJ, focusing on atrocities against the Masalit group in West Darfur.",
      themes: ["Genocide Allegations", "Masalit Targeting", "ICJ Jurisdiction"]
    },
    "article-12": {
      title: "What is the UAE's involvement in war-torn Sudan?",
      source: "France 24",
      date: "2025-03-08",
      url: "https://www.france24.com/en/live-news/20250308-what-is-the-uae-s-involvement-in-war-torn-sudan",
      summary: "Analysis of UAE's alleged involvement in the Sudan conflict, examining weapons supply and strategic interests.",
      themes: ["UAE Support for RSF", "Weapons Supply", "Regional Geopolitics"]
    },
    "article-14": {
      title: "Sudan Takes UAE To World Court Over Alleged Complicity In Genocide",
      source: "Forbes",
      date: "2025-03-09",
      url: "https://www.forbes.com/sites/ewelinaochab/2025/03/09/sudan-takes-uae-to-world-court-over-alleged-complicity-in-genocide/",
      summary: "Legal analysis of Sudan's ICJ filing against the UAE under the Genocide Convention.",
      themes: ["ICJ Process", "Genocide Convention", "Legal Precedent"]
    },
    "article-24": {
      title: "Art. IX Reservations to the Genocide Convention Are Here to Stay? A Response to Diamond",
      source: "Opinio Juris",
      date: "2025-03-14",
      url: "https://opiniojuris.org/2025/03/14/art-ix-reservations-to-the-genocide-convention-are-here-to-stay-a-response-to-diamond/",
      summary: "Analysis of UAE's reservations to Article IX of the Genocide Convention and the implications for ICJ jurisdiction.",
      themes: ["ICJ Jurisdiction", "Genocide Convention", "Legal Analysis"]
    },
    "article-30": {
      title: "Could Sudan be split into two countries?",
      source: "Deutsche Welle",
      date: "2025-03-15",
      url: "https://www.dw.com/en/could-sudan-be-split-into-two-countries/a-71923002",
      summary: "Examination of the potential partition of Sudan amid the ongoing civil conflict between SAF and RSF.",
      themes: ["Humanitarian Crisis", "Regional Geopolitics", "Territorial Control"]
    },
    "article-38": {
      title: "Sudan's war: What's driving UAE and Saudi Arabia interests?",
      source: "Nation Africa",
      date: "2025-03-16",
      url: "https://nation.africa/kenya/news/africa/sudan-s-war-what-s-driving-uae-and-saudi-arabia-interests--4966818",
      summary: "Investigation into UAE's economic interests in Sudan, particularly regarding gold mining and agricultural investments.",
      themes: ["Economic Interests", "Gold Trade", "Regional Geopolitics"]
    },
    "article-39": {
      title: "UAE-Backed RSF Militia's Genocide Against the Masalit Tribe in Darfur",
      source: "Al-Estiklal",
      date: "2025-03-16",
      url: "https://www.alestiklal.net/en/article/uae-backed-rsf-militia-s-genocide-against-the-masalit-tribe-in-darfur",
      summary: "A detailed report on the alleged genocide against the Masalit tribe by the RSF, supported by the UAE.",
      themes: ["Genocide Allegations", "Masalit Targeting", "UAE Support for RSF"]
    }
  };

  // Theme descriptions for non-article nodes
  const themeDescriptions = {
    "legal-process": "Coverage focused on legal procedures, ICJ processes and jurisdictional questions.",
    "genocide-allegations": "Coverage of alleged genocide against the Masalit people and other atrocities in Darfur.",
    "uae-support": "Allegations of the UAE providing weapons, financial and political support to the RSF.",
    "humanitarian-crisis": "Reports on civilian casualties, displacement and the broader humanitarian impact.",
    "economic-interests": "Discussion of economic motivations and resource control as drivers of the conflict.",
    "regional-geopolitics": "Analysis of broader regional implications and strategic interests at play.",
    "icj-filing": "Reports on Sudan's initial filing of the case at the ICJ.",
    "icj-jurisdiction": "Examination of jurisdiction issues, particularly UAE's reservations to the Genocide Convention.",
    "genocide-convention": "Discussion of the application and interpretation of the Genocide Convention.",
    "masalit-targeting": "Specific coverage of alleged targeting of the Masalit ethnic group.",
    "west-darfur": "Reports on atrocities in the West Darfur region.",
    "weapons-supply": "Allegations concerning the supply of weapons by the UAE to the RSF.",
    "financial-support": "Coverage of the alleged financial backing provided by the UAE.",
    "displaced-persons": "Reports concerning people displaced by the conflict.",
    "civilian-casualties": "Coverage detailing civilian deaths and injuries.",
    "gold-trade": "Analysis of gold trade as an economic motivation.",
    "agricultural-land": "Discussion surrounding agricultural land interests.",
    "power-dynamics": "Examination of regional power dynamics.",
    "territorial-control": "Reports on territorial control issues and potential partition."
  };

  useEffect(() => {
    // Dynamically import D3 and initialise the network graph
    const loadD3AndInitializeGraph = async () => {
      try {
        const d3Module = await import('d3');
        const d3 = d3Module.default || d3Module;
        // Clear previous content
        d3.select(containerRef.current).selectAll("*").remove();
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;

        // Create SVG element
        const svg = d3.select(containerRef.current)
          .append("svg")
          .attr("width", width)
          .attr("height", height)
          .attr("viewBox", [0, 0, width, height]);

        // Container group for zoom and pan
        const g = svg.append("g");

        // Add zoom behaviour
        const zoom = d3.zoom()
          .scaleExtent([0.1, 4])
          .on("zoom", (event) => {
            g.attr("transform", event.transform);
          });
        svg.call(zoom);
        svg.call(zoom.transform, d3.zoomIdentity.translate(width / 3, height / 3).scale(0.9));

        // Create links
        const links = g.append("g")
          .attr("class", "links")
          .selectAll("line")
          .data(mockNetworkData.links)
          .enter().append("line")
          .attr("stroke-width", d => {
            if (d.type === 'theme-theme') return 3;
            if (d.type === 'theme-subtheme') return 2;
            if (d.type === 'subtheme-subtheme') return 1.5;
            return 1;
          })
          .attr("stroke", d => {
            if (d.type === 'theme-theme') return "#6b7280";
            if (d.type === 'theme-subtheme') return "#93c5fd";
            if (d.type === 'subtheme-subtheme') return "#cbd5e1";
            return "#d1d5db";
          })
          .attr("stroke-opacity", 0.6)
          .attr("stroke-dasharray", d => d.type === 'theme-article' ? "3,3" : null);

        // Create nodes
        const nodes = g.append("g")
          .attr("class", "nodes")
          .selectAll("g")
          .data(mockNetworkData.nodes)
          .enter().append("g")
          .attr("class", "node")
          .on("click", (event, d) => {
            event.stopPropagation();
            setSelectedNode(d.id);
            if (d.type === 'article') {
              setNodeDetails(articleDetails[d.id]);
            } else {
              setNodeDetails({
                title: d.label,
                type: d.type,
                description: themeDescriptions[d.id]
              });
            }
          })
          .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
          );

        // Append circles for nodes
        nodes.append("circle")
          .attr("r", d => d.size)
          .attr("fill", d => d.color)
          .attr("stroke", "#fff")
          .attr("stroke-width", 1.5);

        // Append labels for nodes
        nodes.append("text")
          .attr("dy", d => d.type === 'theme' ? -30 : -15)
          .attr("text-anchor", "middle")
          .attr("font-size", d => d.type === 'theme' ? "12px" : d.type === 'subtheme' ? "10px" : "8px")
          .attr("font-weight", d => d.type === 'theme' ? "bold" : "normal")
          .text(d => d.label);

        // Create simulation for force layout
        const simulation = d3.forceSimulation(mockNetworkData.nodes)
          .force("link", d3.forceLink(mockNetworkData.links)
            .id(d => d.id)
            .distance(d => {
              if (d.type === 'theme-subtheme') return 80;
              if (d.type === 'theme-article') return 150;
              if (d.type === 'subtheme-subtheme') return 50;
              return 200; // theme-theme connections
            })
            .strength(d => d.strength)
          )
          .force("charge", d3.forceManyBody().strength(-400))
          .force("center", d3.forceCenter(width / 2, height / 2))
          .force("collision", d3.forceCollide().radius(d => d.size * 1.5));

        simulation.on("tick", () => {
          links
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
          nodes.attr("transform", d => `translate(${d.x}, ${d.y})`);
        });

        // Drag functions
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

        // Click on background clears selection
        svg.on("click", () => {
          setSelectedNode(null);
          setNodeDetails(null);
        });

        // Add legend
        const legend = svg.append("g")
          .attr("transform", `translate(20, ${height - 100})`);
        const legendItems = [
          { type: 'theme', label: 'Main Theme', color: "#3b82f6", size: 8 },
          { type: 'subtheme', label: 'Sub-Theme', color: "#10b981", size: 6 },
          { type: 'article', label: 'Article', color: "#f59e0b", size: 4 }
        ];
        legendItems.forEach((item, i) => {
          const legendItem = legend.append("g")
            .attr("transform", `translate(0, ${i * 20})`);
          legendItem.append("circle")
            .attr("r", item.size)
            .attr("fill", item.color);
          legendItem.append("text")
            .attr("x", 15)
            .attr("y", 4)
            .attr("font-size", "10px")
            .text(item.label);
        });

        // Reset zoom button
        const resetButton = svg.append("g")
          .attr("transform", `translate(${width - 100}, 30)`)
          .attr("cursor", "pointer")
          .on("click", (event) => {
            event.stopPropagation();
            svg.transition().duration(750).call(
              zoom.transform,
              d3.zoomIdentity.translate(width / 3, height / 3).scale(0.9)
            );
          });
        resetButton.append("rect")
          .attr("width", 80)
          .attr("height", 30)
          .attr("rx", 5)
          .attr("fill", "white")
          .attr("stroke", "#d1d5db");
        resetButton.append("text")
          .attr("x", 40)
          .attr("y", 18)
          .attr("text-anchor", "middle")
          .attr("font-size", "12px")
          .text("Reset View");
      } catch (error) {
        console.error("Error initialising network graph:", error);
      }
    };
    
    loadD3AndInitializeGraph();
    
    // Cleanup on unmount
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []); // Run once on mount

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Sudan-UAE ICJ Case: Network Analysis
          </h1>
          <p className="text-gray-600">
            Interactive visualisation and narrative insights on the network of themes and articles.
          </p>
        </header>
        
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex flex-col md:flex-row h-[800px]">
            {/* Main network visualisation area */}
            <div className="md:w-3/4 h-full relative">
              <div 
                ref={containerRef} 
                className="w-full h-full border rounded-lg bg-gray-50"
              >
                {/* D3 renders the network graph here */}
              </div>
              <div className="absolute top-4 left-4 bg-white p-3 rounded shadow-md text-xs max-w-xs">
                <p className="font-semibold text-sm mb-1">Interaction Guide:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Drag nodes to reposition</li>
                  <li>Scroll to zoom in/out</li>
                  <li>Click nodes for details</li>
                  <li>Drag canvas to pan</li>
                  <li>Click "Reset View" to recentre</li>
                </ul>
              </div>
            </div>
            
            {/* Details panel */}
            <div className="md:w-1/4 h-full md:ml-4 mt-4 md:mt-0">
              <div className="border rounded-lg h-full p-4 overflow-auto">
                <h3 className="text-xl font-bold mb-4">Node Details</h3>
                {!nodeDetails ? (
                  <div className="h-full flex items-center justify-center p-6 text-center text-gray-500">
                    <p>Click on a node in the network to view details</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg">{nodeDetails.title}</h4>
                      {nodeDetails.type === 'article' ? (
                        <div className="text-sm text-gray-600 mt-1">
                          {nodeDetails.source} | {nodeDetails.date}
                        </div>
                      ) : (
                        <div className="text-sm capitalize text-blue-600 font-medium mt-1">
                          {nodeDetails.type}
                        </div>
                      )}
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-700">Description:</h5>
                      <p className="text-sm text-gray-600 mt-1">
                        {nodeDetails.description || nodeDetails.summary}
                      </p>
                    </div>
                    {nodeDetails.themes && (
                      <div>
                        <h5 className="font-medium text-gray-700">Themes:</h5>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {nodeDetails.themes.map(theme => (
                            <span key={theme} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              {theme}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {nodeDetails.url && (
                      <div className="mt-6">
                        <a 
                          href={nodeDetails.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-600 hover:underline text-sm"
                        >
                          View original article →
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Analysis insights */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Network Analysis Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Structural Patterns:</h4>
                <ul className="list-disc pl-4 space-y-1 text-gray-700">
                  <li>
                    <strong>Central Themes</strong>: Legal Process and Genocide Allegations form the core narratives with the highest connectivity.
                  </li>
                  <li>
                    <strong>Bridge Themes</strong>: UAE Support for RSF acts as a connection between legal and geopolitical narratives.
                  </li>
                  <li>
                    <strong>Peripheral Themes</strong>: Economic Interests emerges later, linking primarily to Regional Geopolitics.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Thematic Insights:</h4>
                <ul className="list-disc pl-4 space-y-1 text-gray-700">
                  <li>
                    <strong>Theme Clusters</strong>: Two main clusters emerge – legal/evidence-focused and contextual/political.
                  </li>
                  <li>
                    <strong>Subtheme Connections</strong>: Masalit Targeting links genocide allegations to humanitarian concerns.
                  </li>
                  <li>
                    <strong>Article Distribution</strong>: Earlier articles (March 6–9) focus on legal processes, while later articles (March 14–16) provide broader context.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-gray-800 mb-1">Evolving Narrative:</h4>
              <p className="text-gray-700">
                The network reveals a progression from the initial focus on the ICJ filing to a deeper examination of specific allegations. UAE support allegations consistently bridge procedural aspects with substantive claims, while later articles introduce economic and geopolitical dimensions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveNetworkAnalysis;










