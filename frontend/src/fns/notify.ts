import toast from 'react-hot-toast'

export const notify = (message: string, error = false) => {
  if (error) {
    toast.error(message)
    return
  }

  toast.success(message)
}
