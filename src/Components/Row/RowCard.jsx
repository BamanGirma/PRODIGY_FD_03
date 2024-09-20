import React from 'react'
function RowCard({title,img,linkText}) {
  return (
    <div className="row-card">
      <h3>{title}</h3>
      <img src={img} alt={title} />
      <a href="#">{linkText}</a>
    </div>
  );
}

export default RowCard