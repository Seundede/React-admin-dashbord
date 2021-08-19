import React from 'react'
import Chart from '../Chart'
import Info from '../Info'
import './Home.css'
import { data} from '../data.js'
import Widgetsmall from '../Widgetsmall'
import Widgetlarge from '../Widgetlarge'

function Home() {
    return (
      <div className="home">
        <Info />
        <Chart
          title="User Analytics"
          grid
          dataKey="Active users"
          data = {data}
        />
        <div className="home__widget">
            <Widgetsmall />
            <Widgetlarge />
        </div>
      </div>
    );
}

export default Home
