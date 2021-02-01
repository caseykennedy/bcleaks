// Modal:

// ___________________________________________________________________

import React, { useState } from 'react'
import { default as ReactModal } from 'react-responsive-modal'
import { transparentize } from 'polished'

import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type ModalProps = {
  children: React.ReactNode
  open: boolean
  close: () => any
} & typeof defaultProps

const defaultProps = {}

const Modal: React.FC<ModalProps> = ({ children, open, close }) => {
  return (
    <ReactModal open={open} onClose={close} styles={modalStyles} center={true} showCloseIcon={false}>
      {children}
    </ReactModal>
  )
}

export default Modal

// ___________________________________________________________________

Modal.defaultProps = defaultProps

const modalStyles = {
  overlay: {
    background: theme.colors.background
  },
  modal: {
    background: theme.colors.background,
    boxShadow: 'none',
    boxSizing: 'border-box',
    margin: '0',
    padding: `${theme.space[8]} 0 0`,
    height: '100%',
    width: '100%'
  }
}
