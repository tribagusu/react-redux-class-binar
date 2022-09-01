import React, { Component } from "react"
import { connect, useSelector } from "react-redux"

const Home = () => {
  const { data } = useSelector((state) => state)

  return <div>{data}</div>
}

export default Home

// class Home extends Component {
//   render() {
//     const { data } = this.props
//     return <div>{data}</div>
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     data: state.data,
//   }
// }

// export default Home(mapStateToProps)(connect)
