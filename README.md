# Dependencies:
- Java 23 JRE & JDK
- Maven
- npm
- docker
- docker-compose

# How to Run

1. ### Initialize Docker:
    - Email dev-server
    - PostgreSQL
   
`docker-compose up -d`

2. ### Create a secure key in [application-dev.yml](src/main/resources/application-dev.yml)
   The following snippet exists at the bottom of the file:
    ```yaml
   application:
     security:
       jwt:
         secret-key: <SECRET KEY>
         expiration: 86400000 # 1 day
   ```
   If you do not replace the key, the program will refuse any login or register attempts.

   To generate a secret key, use `openssl rand -base64 64| tr -d '\n'4`



3. ### Run Backend Server: `mvn spring-boot:run`
ensure port 8080 is free

4. ### Run WebServer: 
   - `cd ./claw-interface`
   - `npm ci`
   - `ng serve`
   - the website will be at http://localhost:4200
