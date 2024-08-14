import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../features/dashboardSlice';
import './Widget.css';

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button onClick={handleRemove} className="remove-widget-button">✖</button>
    </div>
  );
};

export default Widget;
