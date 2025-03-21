// import React, { useState, useEffect } from 'react';
// import { Search, Filter, SortAsc, SortDesc, ExternalLink, Calendar, User, Globe } from 'lucide-react';

// const ArticlesExplorer = () => {
//   const [articles, setArticles] = useState([]);
//   const [filteredArticles, setFilteredArticles] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortConfig, setSortConfig] = useState({ key: 'title', direction: 'asc' });
//   const [selectedDomain, setSelectedDomain] = useState('all');
//   const [loading, setLoading] = useState(true);
//   const [selectedArticle, setSelectedArticle] = useState(null);

//   // Fetch articles from the JSON file
//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         // Fetch the articles from the combined_2.json in the public folder
//         const response = await fetch('/combined_2.json');
//         const data = await response.json();
        
//         // Transform the nested structure into a flat array
//         const articlesArray = [];
//         data.articles.forEach(articleObj => {
//           Object.values(articleObj).forEach(article => {
//             articlesArray.push(article);
//           });
//         });
        
//         setArticles(articlesArray);
//         setFilteredArticles(articlesArray);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching articles:', error);
//         // For demo purposes, let's use the data from the example
//         const demoData = {
//           "articles": [
//             {
//               "1": {
//                 "url": "https://www.aljazeera.com/news/2025/3/6/sudan-files-case-against-uae-at-top-un-court-over-complicity-in-genocide",
//                 "title": "Sudan files case against UAE at top UN court over 'complicity in genocide'",
//                 "description": "Khartoum accuses the UAE of backing the Rapid Support Forces, which is fighting the Sudanese army in a year-long civil war.",
//                 "keywords": "Sudan,UAE,ICJ,Sudan conflict,Rapid Support Forces (RSF)",
//                 "author": null,
//                 "publication_date": null,
//                 "language": "en",
//                 "domain_name": "www.aljazeera.com"
//               }
//             },
//             {
//               "2": {
//                 "url": "https://www.bbc.com/news/articles/c3w1nzpg5dgo",
//                 "title": "Sudan war: UAE rejects accusations of fuelling conflict",
//                 "description": "The UAE says it is committed to de-escalation and denies arming a paramilitary group fighting the army.",
//                 "keywords": null,
//                 "author": null,
//                 "publication_date": null,
//                 "language": "en",
//                 "domain_name": "www.bbc.com"
//               }
//             },
//             {
//               "3": {
//                 "url": "https://foreignpolicy.com/2025/03/17/sudan-icj-genocide-case-uae-rsf-support/",
//                 "title": "Sudan Takes the UAE to Court for Backing a Brutal Militia",
//                 "description": "Khartoum's lawsuit against Abu Dhabi at the International Court of Justice could open a new front in the country's civil war.",
//                 "keywords": "Africa, United Arab Emirates, Sudan, International Court of Justice",
//                 "author": "Cameron Drouin",
//                 "publication_date": null,
//                 "language": "en-US",
//                 "domain_name": "foreignpolicy.com"
//               }
//             }
//           ]
//         };
        
//         const articlesArray = [];
//         demoData.articles.forEach(articleObj => {
//           Object.values(articleObj).forEach(article => {
//             articlesArray.push(article);
//           });
//         });
        
//         setArticles(articlesArray);
//         setFilteredArticles(articlesArray);
//         setLoading(false);
//       }
//     };
    
//     fetchArticles();
//   }, []);

//   // Filter articles based on search term and domain filter
//   useEffect(() => {
//     let result = articles;
    
//     // Apply search filter
//     if (searchTerm) {
//       const searchLower = searchTerm.toLowerCase();
//       result = result.filter(article => 
//         (article.title && article.title.toLowerCase().includes(searchLower)) ||
//         (article.description && article.description.toLowerCase().includes(searchLower)) ||
//         (article.keywords && article.keywords.toLowerCase().includes(searchLower)) ||
//         (article.author && article.author.toLowerCase().includes(searchLower))
//       );
//     }
    
//     // Apply domain filter
//     if (selectedDomain !== 'all') {
//       result = result.filter(article => article.domain_name === selectedDomain);
//     }
    
//     // Apply sorting
//     result = [...result].sort((a, b) => {
//       if (a[sortConfig.key] === null) return 1;
//       if (b[sortConfig.key] === null) return -1;
      
//       if (sortConfig.key === 'title' || sortConfig.key === 'description' || sortConfig.key === 'author' || sortConfig.key === 'domain_name') {
//         const valueA = a[sortConfig.key]?.toLowerCase() || '';
//         const valueB = b[sortConfig.key]?.toLowerCase() || '';
        
//         if (sortConfig.direction === 'asc') {
//           return valueA.localeCompare(valueB);
//         } else {
//           return valueB.localeCompare(valueA);
//         }
//       }
      
//       return 0;
//     });
    
//     setFilteredArticles(result);
//   }, [articles, searchTerm, selectedDomain, sortConfig]);

//   // Get unique domains for filter dropdown
//   const domains = ['all', ...new Set(articles.map(article => article.domain_name))];

//   // Handle sort change
//   const handleSort = (key) => {
//     let direction = 'asc';
//     if (sortConfig.key === key && sortConfig.direction === 'asc') {
//       direction = 'desc';
//     }
//     setSortConfig({ key, direction });
//   };

//   // Reset all filters and sorting
//   const handleReset = () => {
//     setSearchTerm('');
//     setSelectedDomain('all');
//     setSortConfig({ key: 'title', direction: 'asc' });
//     setSelectedArticle(null);
//   };

//   // Get the sort icon for column headers
//   const getSortIcon = (key) => {
//     if (sortConfig.key === key) {
//       return sortConfig.direction === 'asc' ? <SortAsc size={16} /> : <SortDesc size={16} />;
//     }
//     return null;
//   };

//   // View article details
//   const viewArticle = (article) => {
//     setSelectedArticle(article);
//   };

//   // Back to article list
//   const backToList = () => {
//     setSelectedArticle(null);
//   };

//   // Display loading state
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="text-lg">Loading articles...</div>
//       </div>
//     );
//   }

//   // Display article details view
//   if (selectedArticle) {
//     return (
//       <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
//         <div className="mb-4">
//           <button 
//             onClick={backToList}
//             className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Back to Articles
//           </button>
//         </div>
        
//         <div className="mb-4">
//           <h2 className="text-2xl font-bold mb-2">{selectedArticle.title}</h2>
//           <p className="text-gray-600 mb-2">{selectedArticle.description}</p>
          
//           <div className="border-t border-b py-2 my-4">
//             <div className="flex items-center gap-2 mb-1">
//               <Globe size={16} className="text-gray-500" />
//               <span className="text-sm">{selectedArticle.domain_name}</span>
//             </div>
            
//             {selectedArticle.author && (
//               <div className="flex items-center gap-2 mb-1">
//                 <User size={16} className="text-gray-500" />
//                 <span className="text-sm">Author: {selectedArticle.author}</span>
//               </div>
//             )}
            
//             {selectedArticle.publication_date && (
//               <div className="flex items-center gap-2 mb-1">
//                 <Calendar size={16} className="text-gray-500" />
//                 <span className="text-sm">Published: {selectedArticle.publication_date}</span>
//               </div>
//             )}
            
//             {selectedArticle.language && (
//               <div className="flex items-center gap-2 mb-1">
//                 <span className="text-sm">Language: {selectedArticle.language}</span>
//               </div>
//             )}
//           </div>
          
//           {selectedArticle.keywords && (
//             <div className="mb-4">
//               <h3 className="text-md font-semibold mb-1">Keywords:</h3>
//               <div className="flex flex-wrap gap-1">
//                 {selectedArticle.keywords.split(',').map((keyword, idx) => (
//                   <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-sm">
//                     {keyword.trim()}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}
          
//           {selectedArticle.headings && (
//             <div className="mb-4">
//               <h3 className="text-md font-semibold mb-1">Article Headings:</h3>
//               <ul className="list-disc pl-5">
//                 {selectedArticle.headings.slice(0, 10).map((heading, idx) => (
//                   <li key={idx} className="text-sm mb-1">{heading}</li>
//                 ))}
//                 {selectedArticle.headings.length > 10 && (
//                   <li className="text-sm italic">...and {selectedArticle.headings.length - 10} more</li>
//                 )}
//               </ul>
//             </div>
//           )}
          
//           <div className="mt-6">
//             <a 
//               href={selectedArticle.url} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-blue-500 hover:underline"
//             >
//               <ExternalLink size={16} />
//               Read the full article
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Display the main articles list view
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 max-w-7xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6">Articles Explorer</h1>
      
//       {/* Search and filter controls */}
//       <div className="mb-6 flex flex-col md:flex-row gap-4">
//         <div className="relative flex-grow">
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <Search size={16} className="text-gray-400" />
//           </div>
//           <input
//             type="text"
//             placeholder="Search articles..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 pr-3 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
        
//         <div className="flex items-center gap-2">
//           <Filter size={16} className="text-gray-400" />
//           <select
//             value={selectedDomain}
//             onChange={(e) => setSelectedDomain(e.target.value)}
//             className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             {domains.map((domain) => (
//               <option key={domain} value={domain}>
//                 {domain === 'all' ? 'All Sources' : domain}
//               </option>
//             ))}
//           </select>
//         </div>
        
//         <button
//           onClick={handleReset}
//           className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
//         >
//           Reset
//         </button>
//       </div>
      
//       {/* Results count */}
//       <div className="mb-4 text-sm text-gray-500">
//         Showing {filteredArticles.length} of {articles.length} articles
//       </div>
      
//       {/* Articles table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th 
//                 scope="col" 
//                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                 onClick={() => handleSort('title')}
//               >
//                 <div className="flex items-center gap-1">
//                   Title {getSortIcon('title')}
//                 </div>
//               </th>
//               <th 
//                 scope="col" 
//                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                 onClick={() => handleSort('domain_name')}
//               >
//                 <div className="flex items-center gap-1">
//                   Source {getSortIcon('domain_name')}
//                 </div>
//               </th>
//               <th 
//                 scope="col" 
//                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                 onClick={() => handleSort('author')}
//               >
//                 <div className="flex items-center gap-1">
//                   Author {getSortIcon('author')}
//                 </div>
//               </th>
//               <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {filteredArticles.length > 0 ? (
//               filteredArticles.map((article, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">{article.title}</div>
//                     <div className="text-sm text-gray-500 truncate max-w-md">{article.description}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{article.domain_name}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{article.author || '-'}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                     <button
//                       onClick={() => viewArticle(article)}
//                       className="text-blue-600 hover:text-blue-900 mr-2"
//                     >
//                       View
//                     </button>
//                     <a
//                       href={article.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-gray-600 hover:text-gray-900"
//                     >
//                       <ExternalLink size={16} className="inline" />
//                     </a>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
//                   No articles found matching your search criteria.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ArticlesExplorer;







































// import React, { useState, useEffect } from 'react';
// import { Search, Filter, SortAsc, SortDesc, ExternalLink, Calendar, User, Globe } from 'lucide-react';

// const ArticlesExplorer = () => {
//   const [articles, setArticles] = useState([]);
//   const [filteredArticles, setFilteredArticles] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortConfig, setSortConfig] = useState({ key: 'title', direction: 'asc' });
//   const [selectedDomain, setSelectedDomain] = useState('all');
//   const [loading, setLoading] = useState(true);
//   const [selectedArticle, setSelectedArticle] = useState(null);

//   // Fetch articles from the JSON file
//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         // Fetch the articles from the combined_2.json in the public folder
//         const response = await fetch('/combined_2.json');
//         const data = await response.json();

//         // Transform the nested structure into a flat array
//         const articlesArray = [];
//         data.articles.forEach(articleObj => {
//           Object.values(articleObj).forEach(article => {
//             articlesArray.push(article);
//           });
//         });

//         setArticles(articlesArray);
//         setFilteredArticles(articlesArray);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching articles:', error);
//         setLoading(false); // Ensure loading is set to false even on error
//       }
//     };

//     fetchArticles();
//   }, []);

//   // Filter articles based on search term and domain filter
//   useEffect(() => {
//     let result = articles;

//     // Apply search filter
//     if (searchTerm) {
//       const searchLower = searchTerm.toLowerCase();
//       result = result.filter(article =>
//         (article.title && article.title.toLowerCase().includes(searchLower)) ||
//         (article.description && article.description.toLowerCase().includes(searchLower)) ||
//         (article.keywords && article.keywords.toLowerCase().includes(searchLower)) ||
//         (article.author && article.author.toLowerCase().includes(searchLower))
//       );
//     }

//     // Apply domain filter
//     if (selectedDomain !== 'all') {
//       result = result.filter(article => article.domain_name === selectedDomain);
//     }

//     // Apply sorting
//     result = [...result].sort((a, b) => {
//       if (a[sortConfig.key] === null) return 1;
//       if (b[sortConfig.key] === null) return -1;

//       if (sortConfig.key === 'title' || sortConfig.key === 'description' || sortConfig.key === 'author' || sortConfig.key === 'domain_name') {
//         const valueA = a[sortConfig.key]?.toLowerCase() || '';
//         const valueB = b[sortConfig.key]?.toLowerCase() || '';

//         if (sortConfig.direction === 'asc') {
//           return valueA.localeCompare(valueB);
//         } else {
//           return valueB.localeCompare(valueA);
//         }
//       }

//       return 0;
//     });

//     setFilteredArticles(result);
//   }, [articles, searchTerm, selectedDomain, sortConfig]);

//   // Get unique domains for filter dropdown
//   const domains = ['all', ...new Set(articles.map(article => article.domain_name))];

//   // Handle sort change
//   const handleSort = (key) => {
//     let direction = 'asc';
//     if (sortConfig.key === key && sortConfig.direction === 'asc') {
//       direction = 'desc';
//     }
//     setSortConfig({ key, direction });
//   };

//   // Reset all filters and sorting
//   const handleReset = () => {
//     setSearchTerm('');
//     setSelectedDomain('all');
//     setSortConfig({ key: 'title', direction: 'asc' });
//     setSelectedArticle(null);
//   };

//   // Get the sort icon for column headers
//   const getSortIcon = (key) => {
//     if (sortConfig.key === key) {
//       return sortConfig.direction === 'asc' ? <SortAsc size={16} /> : <SortDesc size={16} />;
//     }
//     return null;
//   };

//   // View article details
//   const viewArticle = (article) => {
//     setSelectedArticle(article);
//   };

//   // Back to article list
//   const backToList = () => {
//     setSelectedArticle(null);
//   };

//   // Display loading state
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="text-lg">Loading articles...</div>
//       </div>
//     );
//   }

//   // Display article details view
//   if (selectedArticle) {
//     return (
//       <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
//         <div className="mb-4">
//           <button
//             onClick={backToList}
//             className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Back to Articles
//           </button>
//         </div>

//         <div className="mb-4">
//           <h2 className="text-2xl font-bold mb-2">{selectedArticle.title}</h2>
//           <p className="text-gray-600 mb-2">{selectedArticle.description}</p>

//           <div className="border-t border-b py-2 my-4">
//             <div className="flex items-center gap-2 mb-1">
//               <Globe size={16} className="text-gray-500" />
//               <span className="text-sm">{selectedArticle.domain_name}</span>
//             </div>

//             {selectedArticle.author && (
//               <div className="flex items-center gap-2 mb-1">
//                 <User size={16} className="text-gray-500" />
//                 <span className="text-sm">Author: {selectedArticle.author}</span>
//               </div>
//             )}

//             {selectedArticle.publication_date && (
//               <div className="flex items-center gap-2 mb-1">
//                 <Calendar size={16} className="text-gray-500" />
//                 <span className="text-sm">Published: {selectedArticle.publication_date}</span>
//               </div>
//             )}

//             {selectedArticle.language && (
//               <div className="flex items-center gap-2 mb-1">
//                 <span className="text-sm">Language: {selectedArticle.language}</span>
//               </div>
//             )}
//           </div>

//           {selectedArticle.keywords && (
//             <div className="mb-4">
//               <h3 className="text-md font-semibold mb-1">Keywords:</h3>
//               <div className="flex flex-wrap gap-1">
//                 {selectedArticle.keywords.split(',').map((keyword, idx) => (
//                   <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-sm">
//                     {keyword.trim()}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {selectedArticle.headings && (
//             <div className="mb-4">
//               <h3 className="text-md font-semibold mb-1">Article Headings:</h3>
//               <ul className="list-disc pl-5">
//                 {selectedArticle.headings.slice(0, 10).map((heading, idx) => (
//                   <li key={idx} className="text-sm mb-1">{heading}</li>
//                 ))}
//                 {selectedArticle.headings.length > 10 && (
//                   <li className="text-sm italic">...and {selectedArticle.headings.length - 10} more</li>
//                 )}
//               </ul>
//             </div>
//           )}

//           <div className="mt-6">
//             <a
//               href={selectedArticle.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-blue-500 hover:underline"
//             >
//               <ExternalLink size={16} />
//               Read the full article
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Display the main articles list view
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 max-w-7xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6">Articles Explorer</h1>

//       {/* Search and filter controls */}
//       <div className="mb-6 flex flex-col md:flex-row gap-4">
//         <div className="relative flex-grow">
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <Search size={16} className="text-gray-400" />
//           </div>
//           <input
//             type="text"
//             placeholder="Search articles..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 pr-3 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="flex items-center gap-2">
//           <Filter size={16} className="text-gray-400" />
//           <select
//             value={selectedDomain}
//             onChange={(e) => setSelectedDomain(e.target.value)}
//             className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             {domains.map((domain) => (
//               <option key={domain} value={domain}>
//                 {domain === 'all' ? 'All Sources' : domain}
//               </option>
//             ))}
//           </select>
//         </div>

//         <button
//           onClick={handleReset}
//           className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
//         >
//           Reset
//         </button>
//       </div>

//       {/* Results count */}
//       <div className="mb-4 text-sm text-gray-500">
//         Showing {filteredArticles.length} of {articles.length} articles
//       </div>

//       {/* Articles table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th
//                 scope="col"
//                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                 onClick={() => handleSort('title')}
//               >
//                 <div className="flex items-center gap-1">
//                   Title {getSortIcon('title')}
//                 </div>
//               </th>
//               <th
//                 scope="col"
//                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                 onClick={() => handleSort('domain_name')}
//               >
//                 <div className="flex items-center gap-1">
//                   Source {getSortIcon('domain_name')}
//                 </div>
//               </th>
//               <th
//                 scope="col"
//                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                 onClick={() => handleSort('author')}
//               >
//                 <div className="flex items-center gap-1">
//                   Author {getSortIcon('author')}
//                 </div>
//               </th>
//               <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {filteredArticles.length > 0 ? (
//               filteredArticles.map((article, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">{article.title}</div>
//                     <div className="text-sm text-gray-500 truncate max-w-md">{article.description}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{article.domain_name}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{article.author || '-'}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                     <button
//                       onClick={() => viewArticle(article)}
//                       className="text-blue-600 hover:text-blue-900 mr-2"
//                     >
//                       View
//                     </button>
//                     <a
//                       href={article.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-gray-600 hover:text-gray-900"
//                     >
//                       <ExternalLink size={16} className="inline" />
//                     </a>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
//                   No articles found matching your search criteria.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ArticlesExplorer;

















import React, { useState, useEffect } from 'react';
import { Search, Filter, SortAsc, SortDesc, ExternalLink, Calendar, User, Globe } from 'lucide-react';

const ArticlesExplorer = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'title', direction: 'asc' });
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Fetch articles from the JSON file
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Fetch the articles from the JSON file in the public folder
        const response = await fetch('/combined_2.json');
        const data = await response.json();

        // Transform the nested structure into a flat array
        const articlesArray = [];
        data.articles.forEach(articleObj => {
          Object.values(articleObj).forEach(article => {
            articlesArray.push(article);
          });
        });

        setArticles(articlesArray);
        setFilteredArticles(articlesArray);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false); // Ensure loading is set to false even on error
      }
    };

    fetchArticles();
  }, []);

  // Filter articles based on search term and domain filter
  useEffect(() => {
    let result = articles;

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(article =>
        (article.title && article.title.toLowerCase().includes(searchLower)) ||
        (article.description && article.description.toLowerCase().includes(searchLower)) ||
        (article.keywords && article.keywords.toLowerCase().includes(searchLower)) ||
        (article.author && article.author.toLowerCase().includes(searchLower))
      );
    }

    // Apply domain filter
    if (selectedDomain !== 'all') {
      result = result.filter(article => article.domain_name === selectedDomain);
    }

    // Apply sorting
    result = [...result].sort((a, b) => {
      if (a[sortConfig.key] === null) return 1;
      if (b[sortConfig.key] === null) return -1;

      if (['title', 'description', 'author', 'domain_name'].includes(sortConfig.key)) {
        const valueA = a[sortConfig.key]?.toLowerCase() || '';
        const valueB = b[sortConfig.key]?.toLowerCase() || '';

        if (sortConfig.direction === 'asc') {
          return valueA.localeCompare(valueB);
        } else {
          return valueB.localeCompare(valueA);
        }
      }

      return 0;
    });

    setFilteredArticles(result);
  }, [articles, searchTerm, selectedDomain, sortConfig]);

  // Get unique domains for filter dropdown
  const domains = ['all', ...new Set(articles.map(article => article.domain_name))];

  // Handle sort change
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Reset all filters and sorting
  const handleReset = () => {
    setSearchTerm('');
    setSelectedDomain('all');
    setSortConfig({ key: 'title', direction: 'asc' });
    setSelectedArticle(null);
  };

  // Get the sort icon for column headers
  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? <SortAsc size={16} /> : <SortDesc size={16} />;
    }
    return null;
  };

  // View article details
  const viewArticle = (article) => {
    setSelectedArticle(article);
  };

  // Back to article list
  const backToList = () => {
    setSelectedArticle(null);
  };

  // Display loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl">Loading articles...</div>
      </div>
    );
  }

  // Display article details view
  if (selectedArticle) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <button
              onClick={backToList}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colours"
            >
              Back to Articles
            </button>
          </div>

          <div className="mb-4">
            <h2 className="text-3xl font-bold mb-2 text-center">{selectedArticle.title}</h2>
            <p className="text-gray-700 mb-4 text-center">{selectedArticle.description}</p>

            <div className="border-t border-b py-2 my-4">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Globe size={16} className="text-gray-500" />
                <span className="text-sm text-gray-700">{selectedArticle.domain_name}</span>
              </div>

              {selectedArticle.author && (
                <div className="flex items-center justify-center gap-2 mb-1">
                  <User size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-700">Author: {selectedArticle.author}</span>
                </div>
              )}

              {selectedArticle.publication_date && (
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Calendar size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-700">Published: {selectedArticle.publication_date}</span>
                </div>
              )}

              {selectedArticle.language && (
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-sm text-gray-700">Language: {selectedArticle.language}</span>
                </div>
              )}
            </div>

            {selectedArticle.keywords && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-1">Keywords:</h3>
                <div className="flex flex-wrap gap-1">
                  {selectedArticle.keywords.split(',').map((keyword, idx) => (
                    <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-sm">
                      {keyword.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedArticle.headings && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-1">Article Headings:</h3>
                <ul className="list-disc pl-5">
                  {selectedArticle.headings.slice(0, 10).map((heading, idx) => (
                    <li key={idx} className="text-sm mb-1">{heading}</li>
                  ))}
                  {selectedArticle.headings.length > 10 && (
                    <li className="text-sm italic">...and {selectedArticle.headings.length - 10} more</li>
                  )}
                </ul>
              </div>
            )}

            <div className="mt-6 text-center">
              <a
                href={selectedArticle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-blue-500 hover:underline"
              >
                <ExternalLink size={16} />
                Read the full article
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Display the main articles list view
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Articles Explorer</h1>

      {/* Search and filter controls */}
      <div className="bg-gray-100 p-6 rounded-lg shadow mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-3 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter size={16} className="text-gray-400" />
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {domains.map((domain) => (
                <option key={domain} value={domain}>
                  {domain === 'all' ? 'All Sources' : domain}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colours"
          >
            Reset
          </button>
        </div>

        {/* Results count */}
        <div className="text-gray-700 text-right">
          Showing {filteredArticles.length} of {articles.length} articles
        </div>
      </div>

      {/* Articles table view */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('title')}
              >
                <div className="flex items-center gap-1">
                  Title {getSortIcon('title')}
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('domain_name')}
              >
                <div className="flex items-center gap-1">
                  Source {getSortIcon('domain_name')}
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('author')}
              >
                <div className="flex items-center gap-1">
                  Author {getSortIcon('author')}
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{article.title}</div>
                    <div className="text-sm text-gray-700 truncate max-w-md">{article.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{article.domain_name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{article.author || '-'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => viewArticle(article)}
                      className="text-blue-500 hover:text-blue-600 mr-2 transition-colours"
                    >
                      View
                    </button>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800 transition-colours"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                  No articles found matching your search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArticlesExplorer;











