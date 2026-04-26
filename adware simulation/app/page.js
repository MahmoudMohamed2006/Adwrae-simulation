'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function GoogleSearch() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      setHasSearched(true);
    }
  };

  const isMatch = query.toLowerCase().includes('adware simulation');
  const exactMatch = query.toLowerCase().trim() === 'adware simulation';

  if (hasSearched) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#fff', color: '#222', fontFamily: 'Arial, sans-serif' }}>
        <style dangerouslySetInnerHTML={{__html:`
          body { background: #fff !important; margin: 0; }
        `}} />
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '20px 30px', borderBottom: '1px solid #ebebeb' }}>
          <div style={{ fontSize: '30px', fontWeight: 'bold', letterSpacing: '-2px', marginRight: '40px', cursor: 'pointer' }} onClick={() => { setHasSearched(false); setQuery(''); }}>
            <span style={{ color: '#4285F4' }}>G</span>
            <span style={{ color: '#EA4335' }}>o</span>
            <span style={{ color: '#FBBC05' }}>o</span>
            <span style={{ color: '#4285F4' }}>g</span>
            <span style={{ color: '#34A853' }}>l</span>
            <span style={{ color: '#EA4335' }}>e</span>
          </div>
          <form onSubmit={handleSearch} style={{ flex: 1, maxWidth: '690px', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', border: '1px solid #dfe1e5', borderRadius: '24px', padding: '5px 15px', backgroundColor: '#fff', boxShadow: '0 1px 6px rgba(32,33,36,.28)' }}>
              <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} style={{ flex: 1, border: 'none', outline: 'none', fontSize: '16px', height: '34px' }} />
              <div style={{ borderLeft: '1px solid #dfe1e5', paddingLeft: '10px', marginLeft: '10px', color: '#4285f4', cursor: 'pointer' }} onClick={handleSearch}>
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#4285f4" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </div>
            </div>
          </form>
          <div style={{ marginLeft: 'auto', width: '32px', height: '32px', backgroundColor: '#8a2be2', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            U
          </div>
        </div>
        
        {/* Results */}
        <div style={{ padding: '20px 180px', paddingTop: '30px' }}>
          {(exactMatch || isMatch) ? (
            <>
              <div style={{ color: '#70757a', fontSize: '14px', marginBottom: '20px' }}>
                About 1 result (0.34 seconds)
              </div>
              
              <div style={{ maxWidth: '600px', marginBottom: '30px' }}>
                <Link href="/simulation" style={{ textDecoration: 'none' }}>
                  <div style={{ fontSize: '14px', color: '#202124', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '28px', height: '28px', backgroundColor: '#f1f3f4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '14px' }}>🦠</span>
                    </div>
                    <div>
                      <div style={{ color: '#202124', lineHeight: '1.2' }}>Adware Simulation</div>
                      <div style={{ color: '#4d5156', fontSize: '12px' }}>https://adwaresimulation.com › overview</div>
                    </div>
                  </div>
                  <h3 style={{ color: '#1a0dab', fontSize: '20px', fontWeight: '400', margin: '5px 0', textDecoration: 'none' }}>
                    Adware Simulation - Cybersecurity Training
                  </h3>
                </Link>
                <div style={{ color: '#4d5156', fontSize: '14px', lineHeight: '1.58' }}>
                  Adware Simulation is a cybersecurity awareness and learning module designed to help students and non-technical users understand common digital threats...
                </div>
              </div>
            </>
          ) : (
            <div style={{ fontSize: '16px' }}>
              <p style={{ marginTop: '20px', marginBottom: '10px' }}>Your search - <b>{query}</b> - did not match any documents.</p>
              <p style={{ marginBottom: '10px' }}>Suggestions:</p>
              <ul style={{ paddingLeft: '30px', lineHeight: '1.6' }}>
                <li>Make sure that all words are spelled correctly.</li>
                <li>Try different keywords.</li>
                <li>Try more general keywords.</li>
                <li>Try <em>"Adware Simulation"</em> to access the training module.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', color: '#222', fontFamily: 'Arial, sans-serif' }}>
      <style dangerouslySetInnerHTML={{__html:`
        body { background: #fff !important; margin: 0; }
      `}} />
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '15px 25px', gap: '20px', alignItems: 'center' }}>
        <a href="#" style={{ color: '#000', textDecoration: 'none', fontSize: '13px' }}>Gmail</a>
        <a href="#" style={{ color: '#000', textDecoration: 'none', fontSize: '13px' }}>Images</a>
        <div style={{ width: '24px', height: '24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', cursor: 'pointer', margin: '0 10px' }}>
          {[...Array(9)].map((_, i) => (
            <div key={i} style={{ backgroundColor: '#5f6368', borderRadius: '50%' }}></div>
          ))}
        </div>
        <div style={{ width: '32px', height: '32px', backgroundColor: '#8a2be2', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}>
          U
        </div>
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '12vh' }}>
        <div style={{ fontSize: '90px', fontWeight: '600', letterSpacing: '-3px', marginBottom: '38px', fontFamily: '"Product Sans", sans-serif' }}>
          <span style={{ color: '#4285F4' }}>G</span>
          <span style={{ color: '#EA4335' }}>o</span>
          <span style={{ color: '#FBBC05' }}>o</span>
          <span style={{ color: '#4285F4' }}>g</span>
          <span style={{ color: '#34A853' }}>l</span>
          <span style={{ color: '#EA4335' }}>e</span>
        </div>
        
        <form onSubmit={handleSearch} style={{ width: '100%', maxWidth: '584px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            width: '100%', 
            border: (isFocused && isMatch) ? '1px solid #dfe1e5' : '1px solid #dfe1e5', 
            borderRadius: (isFocused && isMatch) ? '24px 24px 0 0' : '24px', 
            padding: '5px 15px',
            backgroundColor: '#fff',
            boxShadow: (isFocused && isMatch) ? '0 4px 6px rgba(32,33,36,.28)' : 'none',
            transition: 'box-shadow 0.2s',
            zIndex: 3
          }} 
          onMouseOver={(e) => {
            if (!(isFocused && isMatch)) {
              e.currentTarget.style.boxShadow = '0 1px 6px rgba(32,33,36,.28)';
            }
          }}
          onMouseOut={(e) => {
            if (!(isFocused && isMatch)) {
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
          >
            <div style={{ color: '#9aa0a6', marginRight: '13px', paddingTop: '3px' }}>
              <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </div>
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              style={{ flex: 1, border: 'none', outline: 'none', fontSize: '16px', height: '34px' }}
              autoFocus
            />
            <div style={{ marginLeft: '10px', paddingTop: '3px', cursor: 'pointer' }} onClick={handleSearch}>
             <svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.8-2.05-4.67h2c0 1.45.56 2.42 1.47 3.38v.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
            </div>
          </div>
          
          {/* Autocomplete Dropdown */}
          {isFocused && isMatch && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: '#fff',
              border: '1px solid #dfe1e5',
              borderTop: 'none',
              borderRadius: '0 0 24px 24px',
              boxShadow: '0 4px 6px rgba(32,33,36,.28)',
              paddingBottom: '15px',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ height: '10px' }}></div>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '6px 20px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f1f3f4'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                onClick={() => {
                  setQuery('Adware Simulation');
                  setHasSearched(true);
                }}
              >
                <div style={{ color: '#9aa0a6', marginRight: '13px' }}>
                  <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                    <path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                  </svg>
                </div>
                <span style={{ fontWeight: 'bold' }}>Adware Simulation</span>
              </div>
            </div>
          )}

          <div style={{ marginTop: '28px', display: 'flex', gap: '12px' }}>
            <button 
              type="submit"
              onClick={handleSearch}
              style={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #f8f9fa',
                borderRadius: '4px',
                color: '#3c4043',
                fontSize: '14px',
                padding: '0 16px',
                height: '36px',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => { e.currentTarget.style.border = '1px solid #dadce0'; e.currentTarget.style.boxShadow = '0 1px 1px rgba(0,0,0,.1)'; }}
              onMouseOut={(e) => { e.currentTarget.style.border = '1px solid #f8f9fa'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              Google Search
            </button>
            <button 
              type="button"
              onClick={() => {
                if (isMatch || query === '') router.push('/simulation');
                else handleSearch(new Event('submit'));
              }}
              style={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #f8f9fa',
                borderRadius: '4px',
                color: '#3c4043',
                fontSize: '14px',
                padding: '0 16px',
                height: '36px',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => { e.currentTarget.style.border = '1px solid #dadce0'; e.currentTarget.style.boxShadow = '0 1px 1px rgba(0,0,0,.1)'; }}
              onMouseOut={(e) => { e.currentTarget.style.border = '1px solid #f8f9fa'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              I'm Feeling Lucky
            </button>
          </div>
        </form>

        <div style={{ marginTop: '40px', display: 'flex', gap: '16px' }}>
          <div 
            onClick={() => router.push('/simulation')}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              cursor: 'pointer',
              padding: '12px 16px',
              borderRadius: '8px',
              transition: 'background-color 0.2s',
              gap: '10px'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f1f3f4'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            title="Adware Simulation"
          >
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#f1f3f4',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ fontSize: '20px' }}>🦠</span>
            </div>
            <span style={{ fontSize: '13px', color: '#202124', fontFamily: 'Arial, sans-serif' }}>Adware Simulation</span>
          </div>
        </div>

        <div style={{ marginTop: '30px', fontSize: '13px', color: '#4d5156' }}>
          Google offered in: <a href="#" style={{ color: '#1a0dab', textDecoration: 'none' }}>English</a>
        </div>
      </div>
    </div>
  );
}
