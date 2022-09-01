import React, { Component, useEffect, useState } from "react"
import { connect, useSelector, useDispatch } from "react-redux"
import { getData } from "../redux/actions/dataAction"
import { Link } from "react-router-dom"

const Home = () => {
  const { data } = useSelector((state) => state.dataReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <div>
      <div>
        {data.map((data) => (
          <h3 key={data.id}>{data.email}</h3>
        ))}
      </div>
      <button>
        <Link to="registration">Registration</Link>
      </button>
    </div>
  )
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
