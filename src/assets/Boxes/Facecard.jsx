function Facecard() {
  return (
    <>
    
    <div className="card mt-3 , container"
      style={{ width: "18rem", maxHeight: "360px" }}>
        
          
        
          <img src="data:image/png;base64,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" className="card-img-top" alt="..." />
          
            <h5 className="card-title">Face Reader</h5>
        
          <div className="btn">
            <input type="file" />
            <button>Upload</button>
          </div>
        </div>
    
  
    </>
    
  );
}

export default Facecard;
