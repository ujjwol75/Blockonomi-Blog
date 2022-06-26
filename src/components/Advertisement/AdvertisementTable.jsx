import React from 'react'
import { Button, Table } from 'react-bootstrap'

const AdvertisementTable = () => {
  return (
    <div>
        <p>Gambling</p>
      <Table>
        <tbody>
          <tr>
            <td><img src="../../newsbox2.jpg" style={{width:'30px'}} alt="" /></td>
            <td>Mark</td>
            <td><Button variant="dark">Review</Button></td>
            <td><Button>Review</Button></td>
          </tr>
          <tr>
          <td><img src="../../newsbox2.jpg" style={{width:'30px'}} alt="" /></td>
            <td>Jacob</td>
            <td><Button variant="dark">Review</Button></td>
            <td><Button>Review</Button></td>
          </tr>
          <tr>
          <td><img src="../../newsbox2.jpg" style={{width:'30px'}} alt="" /></td>
            <td>Jacob</td>
            <td><Button variant="dark">Review</Button></td>
            <td><Button>Review</Button></td>
          </tr>
          <tr>
          <td><img src="../../newsbox2.jpg" style={{width:'30px'}} alt="" /></td>
            <td>Jacob</td>
            <td><Button variant="dark">Review</Button></td>
            <td><Button>Review</Button></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default AdvertisementTable