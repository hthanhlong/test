import express, {
    Application,
    Errback,
    NextFunction,
    Request,
    Response,
} from 'express'
import ENV_CONGIF from './constant'
import { initDatabase } from './database'

const PORT = ENV_CONGIF.PORT

const main = async () => {
    await initDatabase()
    const app: Application = express()

    app.use('/', (req: Request, res: Response): void => {
        res.send('Hello wolrd')
    })

    app.use(
        (
            error: Errback,
            req: Request,
            res: Response,
            next: NextFunction
        ): void => {
            if (res.headersSent) {
                return next(error)
            }
            res.status(500)
            res.render('error', { error: error })
        }
    )

    app.listen(PORT, () => {
        console.log(`server already running --> ${PORT}`)
    })
}

main()
