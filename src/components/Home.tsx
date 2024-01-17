import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Welcome to Jvec Contact Manager App</h2>
              <p className="card-text text-center">Explore your contacts and manage them efficiently.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
