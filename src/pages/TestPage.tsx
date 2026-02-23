const TestPage = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'red', fontSize: '32px' }}>Test Page - If you see this, React is working!</h1>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>
        This is a simple test page to verify the basic setup is working.
      </p>
      <div style={{ 
        backgroundColor: '#f0f0f0', 
        padding: '20px', 
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h2>Features Working:</h2>
        <ul>
          <li>✅ React rendering</li>
          <li>✅ Component structure</li>
          <li>✅ Basic styling</li>
        </ul>
      </div>
    </div>
  );
};

export default TestPage;
