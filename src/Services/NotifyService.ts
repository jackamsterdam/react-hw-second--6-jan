import { Notyf } from "notyf"
// dont forget css!! 
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css">

class NotifyService {

    private notification = new Notyf({ duration: 4000, position: { x: 'center', y: 'top' } })

    success(message: string): void {

        this.notification.success(message)
    }

    error(err: any): void {
        const message = this.extractErrorMessage(err)
        this.notification.error(message)
    }

    private extractErrorMessage(err: any): string {
        if (typeof err === 'string') return err

        if (typeof err.response?.data === 'string') return err.response.data

        if (Array.isArray(err.response?.data)) return err.response.data[0]

        if (typeof err.message === 'string') return err.message

        return 'איזשהי טעות,אנא נסה שוב'
    }

}

const notify = new NotifyService()
export default notify