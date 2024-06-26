export type Error = {
  errorStatus: string
  errorReason: string
}

export class ApplicationError extends Error {
  commonError: Error

  constructor(commonError: Error) {
    super(commonError.errorReason)
    this.commonError = commonError
  }
}

export const GET_ADDRESS_FAILED: Error = {
  errorStatus: 'INTERNAL_ERROR',
  errorReason: 'GET_ADDRESS_FAILED',
}

export const GET_USER_FAILED: Error = {
  errorStatus: 'INTERNAL_ERROR',
  errorReason: 'GET_USER_FAILED',
}

export const GET_LOCATIONS_FAILED: Error = {
  errorStatus: 'INTERNAL_ERROR',
  errorReason: 'GET_LOCATIONS_FAILED',
}
