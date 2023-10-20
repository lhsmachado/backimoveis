


function MakeErrors(message: string, status: number){
    return {
        error: true,
        message,
        status
    }
}

export { MakeErrors }