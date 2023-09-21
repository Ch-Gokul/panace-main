
import React from 'react';

class NutritionTable extends React.Component {
  render() {
    const { d } = this.props;

    // Create an array of objects where each object represents a key-value pair from the d dictionary
    const dataRows = Object.keys(d).map(key => ({
      nutrient: key,
      value: d[key]
    }));

    return (
      <div>
        <h2>Nutrition Table</h2>
        <table>
          <thead>
            <tr>
              <th>Nutrient</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {dataRows.map((item, index) => (
              <tr key={index}>
                <td>{item.nutrient}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default NutritionTable;
