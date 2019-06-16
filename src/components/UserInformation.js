import React from 'react'
import PropTypes from 'prop-types'
import UserDetail from './UserDetail'
import UserTable from './UserTable'
import { useModalWithData } from '../hooks'
import CustomModal from '../modal'


const UserInformation = props => {
  const {
    modalOpen,
    selected,
    setSelected,
    setModalState
  } = useModalWithData()
  const {data} = props

  return (
    <div>
      <div style={{ padding: '1rem' }}>
      <CustomModal
        title="User Detail"
        isActive={modalOpen}
        handleClose={() => setModalState(false)}
      >
        <UserDetail data={selected} />
      </CustomModal>

      <UserTable
        data={data}
        setSelected={setSelected}
        setModalState={setModalState}
      />
      </div>
    </div>
  )
}

UserInformation.propTypes = {
  data: PropTypes.array.isRequired,
}
export default UserInformation