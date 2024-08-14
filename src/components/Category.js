import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../features/dashboardSlice';
import Widget from './Widget';
import './Category.css';

const Category = ({ category, searchQuery }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [showAddWidget, setShowAddWidget] = useState(false);
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    if (widgetName && widgetText) {
      dispatch(addWidget({ categoryId: category.id, name: widgetName, text: widgetText }));
      setWidgetName('');
      setWidgetText('');
      setShowAddWidget(false);
    }
  };

  // Filter widgets based on the search query
  const filteredWidgets = category.widgets.filter((widget) =>
    widget.name.toLowerCase().includes(searchQuery) || widget.text.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widgets">
        {filteredWidgets.map((widget) => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
        <button onClick={() => setShowAddWidget(true)} className="add-widget-button">
          + Add Widget
        </button>
      </div>
      {showAddWidget && (
        <div className="add-widget-form">
          <input
            type="text"
            placeholder="Widget Name"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Widget Text"
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
          />
          <button onClick={handleAddWidget} className="confirm-add-widget">
            Confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default Category;
