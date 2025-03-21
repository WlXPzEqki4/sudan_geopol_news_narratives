import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const ArticleExplorer = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');
  const [filterDomain, setFilterDomain] = useState('');
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [domains, setDomains] = useState([]);

  // Fetch data from the JSON file
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch the JSON file from the public folder
        const response = await fetch('/combined_articles_batch_2_inc.json');
        const data = await response.json();
        
        // Extract articles from the JSON structure in a more robust way
        const extractedArticles = Object.entries(data)
          .filter(([key, value]) => key.startsWith('article_') && typeof value === 'object')
          .map(([_, value]) => value);
        
        setArticles(extractedArticles);
        setFilteredArticles(extractedArticles);
        
        // Extract unique domains for filtering
        const uniqueDomains = [...new Set(extractedArticles.map(article => 
          article.metadata?.domain || 'Unknown domain'
        ))];
        setDomains(uniqueDomains);
        
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching article data:", err);
        setError("Failed to load articles. Please try again later.");
        setIsLoading(false);
      }
    }
    
    fetchData();
  }, []);

  // Search and filter articles
  useEffect(() => {
    let result = [...articles];
    
    // Filter by search term
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      result = result.filter(article => 
        (article.title?.toLowerCase().includes(lowercasedTerm) || false) || 
        (article.cleaned_text_content?.toLowerCase().includes(lowercasedTerm) || false)
      );
    }
    
    // Filter by domain
    if (filterDomain) {
      result = result.filter(article => article.metadata?.domain === filterDomain);
    }
    
    // Sort the articles
    result.sort((a, b) => {
      if (sortBy === 'date') {
        const dateA = new Date(a.metadata?.timestamp || 0);
        const dateB = new Date(b.metadata?.timestamp || 0);
        return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
      } else if (sortBy === 'title') {
        return sortDirection === 'asc' 
          ? (a.title || '').localeCompare(b.title || '') 
          : (b.title || '').localeCompare(a.title || '');
      } else if (sortBy === 'source') {
        return sortDirection === 'asc' 
          ? (a.metadata?.domain || '').localeCompare(b.metadata?.domain || '') 
          : (b.metadata?.domain || '').localeCompare(a.metadata?.domain || '');
      }
      return 0;
    });
    
    setFilteredArticles(result);
  }, [articles, searchTerm, sortBy, sortDirection, filterDomain]);

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "Unknown date";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return dateString; // Return the original string if parsing fails
    }
  };

  // Extract publication date from article text when available
  const extractPublicationDate = (article) => {
    if (!article.cleaned_text_content) return "Publication date not found";
    
    // Look for common date patterns in the text
    const dateLines = article.cleaned_text_content.split('\n').filter(line => 
      /\d{1,2}\s+(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}/.test(line) ||
      /(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}/.test(line) ||
      /\d{1,2}\/\d{1,2}\/\d{4}/.test(line) ||
      /\d{1,2}\.\d{1,2}\.\d{4}/.test(line) ||
      /\d{1,2}-\d{1,2}-\d{4}/.test(line) ||
      /\d{1,2}\s+Mar(?:ch)?\s+\d{4}/.test(line)
    );
    
    if (dateLines && dateLines.length > 0) {
      return dateLines[0].trim();
    }
    
    return "Publication date not found";
  };

  // Toggle sort direction
  const toggleSortDirection = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  // Extract byline/author from article
  const extractByline = (article) => {
    if (!article.cleaned_text_content) return "Unknown author";
    
    const lines = article.cleaned_text_content.split('\n');
    
    // Look for common byline patterns
    for (let i = 0; i < Math.min(10, lines.length); i++) {
      const line = lines[i].trim();
      
      // Check for "By [Name]" pattern
      if (line.startsWith('By ') && line.length < 100) {
        return line;
      }
      
      // Check for author with title patterns
      if (/^[A-Z][a-z]+ [A-Z][a-z]+, [A-Za-z\s]+$/.test(line) && line.length < 100) {
        return line;
      }
      
      // Check for bracketed author name pattern
      if (line.startsWith('[') && line.includes(']') && line.length < 150) {
        return line;
      }
    }
    
    return "Unknown author";
  };

  // Toggle expanded article
  const toggleArticleExpand = (index) => {
    if (expandedArticle === index) {
      setExpandedArticle(null);
    } else {
      setExpandedArticle(index);
    }
  };

  if (isLoading) return <div className="flex items-center justify-center h-screen text-xl">Loading articles...</div>;
  if (error) return <div className="flex items-center justify-center h-screen text-xl text-red-600">{error}</div>;
  if (!articles || articles.length === 0) return <div className="flex items-center justify-center h-screen text-xl">No articles found in the data source.</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Sudan-UAE ICJ Case Article Explorer</h1>
      <p className="text-center mb-8 text-gray-700">
        A collection of {articles.length} news articles about Sudan's 2025 case against the UAE at the International Court of Justice
      </p>
      
      {/* Search and filters */}
      <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full p-3 pl-10 border rounded shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="md:w-64">
            <select
              className="w-full p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
              value={filterDomain}
              onChange={(e) => setFilterDomain(e.target.value)}
            >
              <option value="">All Sources</option>
              {domains.map((domain, index) => (
                <option key={index} value={domain}>{domain}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="font-medium text-gray-700">Sort by:</div>
          <div className="flex gap-2">
            <button
              className={`px-4 py-2 rounded ${sortBy === 'date' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => {
                if (sortBy === 'date') {
                  toggleSortDirection();
                } else {
                  setSortBy('date');
                  setSortDirection('desc');
                }
              }}
            >
              Date {sortBy === 'date' && (sortDirection === 'asc' ? '↑' : '↓')}
            </button>
            <button
              className={`px-4 py-2 rounded ${sortBy === 'title' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => {
                if (sortBy === 'title') {
                  toggleSortDirection();
                } else {
                  setSortBy('title');
                  setSortDirection('asc');
                }
              }}
            >
              Title {sortBy === 'title' && (sortDirection === 'asc' ? '↑' : '↓')}
            </button>
            <button
              className={`px-4 py-2 rounded ${sortBy === 'source' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => {
                if (sortBy === 'source') {
                  toggleSortDirection();
                } else {
                  setSortBy('source');
                  setSortDirection('asc');
                }
              }}
            >
              Source {sortBy === 'source' && (sortDirection === 'asc' ? '↑' : '↓')}
            </button>
          </div>
          
          <div className="ml-auto text-gray-700">
            {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
          </div>
        </div>
      </div>
      
      {/* Articles list */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {filteredArticles.map((article, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600">{article.metadata?.domain || 'Unknown source'}</span>
                  <span className="text-sm text-gray-500">{formatDate(article.metadata?.timestamp)}</span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 text-gray-800">
                  {article.title || 'Untitled article'}
                </h2>
                
                <div className="flex flex-col md:flex-row md:justify-between mb-4">
                  <div className="text-sm text-gray-700 mb-2 md:mb-0">
                    {extractByline(article)}
                  </div>
                  <div className="text-sm text-gray-500">
                    {extractPublicationDate(article)}
                  </div>
                </div>
                
                <div className="mb-4">
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm font-medium"
                  >
                    View Original Source →
                  </a>
                </div>
                
                {expandedArticle === index ? (
                  <div className="mt-4 space-y-4">
                    <div className="p-4 bg-gray-50 rounded border border-gray-200">
                      <h3 className="font-medium text-gray-800 mb-2">Full Article Content:</h3>
                      <div className="text-gray-700 whitespace-pre-line">
                        {article.cleaned_text_content || article.text_content || 'No content available'}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded border border-gray-200">
                      <h3 className="font-medium text-gray-800 mb-2">Metadata:</h3>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><span className="font-medium">Domain:</span> {article.metadata?.domain || 'Not available'}</li>
                        <li><span className="font-medium">Timestamp:</span> {article.metadata?.timestamp || 'Not available'}</li>
                        <li><span className="font-medium">Cleaned Timestamp:</span> {article.metadata?.cleaned_timestamp || 'Not available'}</li>
                        {article.index !== undefined && <li><span className="font-medium">Index:</span> {article.index}</li>}
                        {article.source_file && <li><span className="font-medium">Source File:</span> {article.source_file}</li>}
                      </ul>
                    </div>
                    
                    <button
                      onClick={() => toggleArticleExpand(index)}
                      className="w-full py-2 bg-gray-200 rounded text-gray-700 hover:bg-gray-300 transition-colors"
                    >
                      Collapse Article
                    </button>
                  </div>
                ) : (
                  <div>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.cleaned_text_content?.split('\n')[0] || 
                       article.text_content?.split('\n')[0] || 
                       'No preview available'}
                    </p>
                    <button
                      onClick={() => toggleArticleExpand(index)}
                      className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                      Read Full Article
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-medium text-gray-700">No articles found</h3>
          <p className="mt-2 text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default ArticleExplorer;