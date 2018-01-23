import React from 'react'

const AddProductModal = ({ user }) => (
  <div className="modal fade" id="addProductModal" tabIndex="-1" role="dialog" aria-labelledby="transferModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Add Solerus Certificate</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div style={{ marginBottom: '10px' }}>
            Provide your email address to the seller or
            retailer to add a product&apos;s Solerus certificate to your inventory.
          </div>
          <div style={{ marginBottom: '10px' }}>Email: <b>{user.email}</b></div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
)
export default AddProductModal
