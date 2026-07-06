import './MobileFrame.css';

function MobileFrame({ children }) {
  return (
    <main className="mobile-frame">
      <div className="status-bar" style={{ marginBottom: 'env(safe-area-inset-top)' }}></div>
 
    

      {children}
    </main>
  );
}

export default MobileFrame;