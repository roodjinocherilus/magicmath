import React, { useState, useEffect } from 'react';
import './Quotes.css';

function QuoteDisplay() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const category = 'dating';
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: {
            'X-Api-Key': 'O6JTPFc5gdPqGeLNkhhZcA==GSoSA42UbEhJRgm6',
          },
        });
        const data = await res.json();
        setQuotes(data);
      } catch (error) {
        setHasError(true);
        setQuotes([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading quotes ...</div>;
  }

  if (hasError) {
    return (
      <div className="failed">
        Failed to load quotes.
      </div>
    );
  }

  if (!quotes.length) {
    return (
      <div className="failed">
        No quotes found.
      </div>
    );
  }

  return (
    <ul>
      {quotes.map((quote) => (
        <div key={quote.id} className="quotes">
          <p>
            {quote.quote}
            <br />
            -
            {quote.author}
          </p>
        </div>
      ))}
    </ul>
  );
}

export default QuoteDisplay;
