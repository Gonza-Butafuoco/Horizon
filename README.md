Horizon
Descripción

Horizon es una plataforma SaaS financiera construida con Next.js que permite a los usuarios conectar múltiples cuentas bancarias, visualizar transacciones en tiempo real, transferir dinero a otros usuarios de la plataforma y gestionar sus finanzas de manera eficiente.


⚙️ Tecnologías Utilizadas
Next.js: Framework de React para aplicaciones web.
TypeScript: Tipado estático para mayor seguridad en el desarrollo.
Appwrite: Backend-as-a-Service para autenticación y base de datos.
Plaid: Integración con bancos para enlazar cuentas bancarias.
Dwolla: Procesamiento de pagos y transferencias de dinero.
React Hook Form y Zod: Manejo de formularios y validación de datos.
TailwindCSS: Framework de CSS para diseño responsivo.
Chart.js: Visualización de datos con gráficos interactivos.
ShadCN: Componentes UI personalizados y accesibles.
🔋 Características
Autenticación Segura: Implementación de autenticación SSR con validaciones y autorización adecuadas.
Conexión con Bancos: Integración con Plaid para enlazar múltiples cuentas bancarias.
Página Principal: Vista general con balance total de todas las cuentas conectadas, transacciones recientes y desglose de gastos por categorías.
Gestión de Bancos: Lista completa de los bancos conectados con sus respectivos saldos y detalles de cuenta.
Historial de Transacciones: Incluye paginación y filtros para visualizar transacciones de distintos bancos.
Actualización en Tiempo Real: Los cambios se reflejan en todas las páginas relevantes al conectar nuevas cuentas bancarias.
Transferencias de Fondos: Permite a los usuarios enviar dinero a otras cuentas utilizando Dwolla, con validaciones y autenticación de destinatarios.
Diseño Responsivo: Interfaz optimizada para escritorio, tablet y dispositivos móviles.
🚀 Instalación y Configuración

Clona este repositorio:
git clone https://github.com/Gonza-Butafuoco/Horizon.git

Navega al directorio del proyecto:
cd Horizon

Instala las dependencias:
npm install
 o
yarn install

Crea un archivo .env.local con las variables de entorno necesarias:
NEXT_PUBLIC_APPWRITE_PROJECT_ID=tu_project_id
NEXT_PUBLIC_APPWRITE_ENDPOINT=tu_endpoint
NEXT_PUBLIC_PLAID_CLIENT_ID=tu_client_id
NEXT_PUBLIC_PLAID_SECRET=tu_secret
NEXT_PUBLIC_DWOLLA_KEY=tu_key
NEXT_PUBLIC_DWOLLA_SECRET=tu_secret

Inicia el servidor de desarrollo:
npm run dev
 o
yarn dev

Abre http://localhost:3000 en tu navegador.

🛠️ Contribuciones
Las contribuciones son bienvenidas. Para contribuir:

Haz un fork del proyecto.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -m 'Agrega nueva funcionalidad').
Sube tus cambios (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.
 
English

Horizon
Description

Horizon is a financial SaaS platform built with Next.js that allows users to connect multiple bank accounts, display transactions in real time, transfer money to other platform users, and manage their finances efficiently.



⚙️ Tech Stack
Next.js: React framework for web applications.
TypeScript: Static typing for enhanced development security.
Appwrite: Backend-as-a-Service for authentication and database management.
Plaid: Bank integration for linking accounts.
Dwolla: Payment processing and money transfers.
React Hook Form & Zod: Form handling and data validation.
TailwindCSS: Responsive design framework.
Chart.js: Interactive data visualization.
ShadCN: Custom and accessible UI components.
🔋 Features
Secure Authentication: SSR authentication with proper validation and authorization.
Bank Connectivity: Integration with Plaid for linking multiple bank accounts.
Home Page: Provides a general account overview, total balance from all connected banks, recent transactions, and expense breakdown by categories.
Bank Management: Displays a complete list of connected banks with their balances and account details.
Transaction History: Includes pagination and filtering options for viewing transactions from different banks.
Real-Time Updates: Changes reflect across all relevant pages when connecting new bank accounts.
Funds Transfer: Allows users to send money using Dwolla to other accounts with required recipient authentication.
Responsive Design: Ensures a seamless user experience across desktop, tablet, and mobile devices.
🚀 Installation & Setup

Clone this repository:
git clone https://github.com/Gonza-Butafuoco/Horizon.git


Navigate to the project directory:
cd Horizon


Install dependencies:
npm install
 or
yarn install

Create a .env.local file with the required environment variables:
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_endpoint
NEXT_PUBLIC_PLAID_CLIENT_ID=your_client_id
NEXT_PUBLIC_PLAID_SECRET=your_secret
NEXT_PUBLIC_DWOLLA_KEY=your_key
NEXT_PUBLIC_DWOLLA_SECRET=your_secret

Start the development server:
npm run dev
# or
yarn dev

Open http://localhost:3000 in your browser.

🛠️ Contributions
Contributions are welcome! To contribute:

Fork the project.
Create a new branch (git checkout -b feature/new-feature).
Make your changes and commit them (git commit -m 'Add new feature').
Push your changes (git push origin feature/new-feature).
Open a Pull Request.

 
