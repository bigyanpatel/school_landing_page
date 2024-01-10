## Steps to Run the Server

1. Run the following command to start the server in development mode:
    ```
    npm run dev
    ```

2. Execute the following command to build the application:
    ```
    npm run build
    ```

3. Start the server using the build version by running:
    ```
    npm run start
    ```

## Changing the Port in Production Mode

To change the port to `4000` in production mode, update the `start` script in `package.json` as follows:

```json
"start": "next start -p 4000"
