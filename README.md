# Horizon

## Descripción

Horizon es una plataforma **SaaS financiera** construida con **Next.js** que permite a los usuarios conectar múltiples cuentas bancarias, visualizar transacciones en tiempo real, transferir dinero a otros usuarios de la plataforma y gestionar sus finanzas de manera eficiente.


---

## ⚙️ Tecnologías Utilizadas

- **Next.js**: Framework de React para aplicaciones web.  
- **TypeScript**: Tipado estático para mayor seguridad en el desarrollo.  
- **Appwrite**: Backend-as-a-Service para autenticación y base de datos.  
- **Plaid**: Integración con bancos para enlazar cuentas bancarias.  
- **Dwolla**: Procesamiento de pagos y transferencias de dinero.  
- **React Hook Form** y **Zod**: Manejo de formularios y validación de datos.  
- **TailwindCSS**: Framework de CSS para diseño responsivo.  
- **Chart.js**: Visualización de datos con gráficos interactivos.  
- **ShadCN**: Componentes UI personalizados y accesibles.  

---

## 🔋 Características

- **Autenticación Segura**: Implementación de autenticación SSR con validaciones y autorización adecuadas.  
- **Conexión con Bancos**: Integración con **Plaid** para enlazar múltiples cuentas bancarias.  
- **Página Principal**: Vista general con balance total de todas las cuentas conectadas, transacciones recientes y desglose de gastos por categorías.  
- **Gestión de Bancos**: Lista completa de los bancos conectados con sus respectivos saldos y detalles de cuenta.  
- **Historial de Transacciones**: Incluye paginación y filtros para visualizar transacciones de distintos bancos.  
- **Actualización en Tiempo Real**: Los cambios se reflejan en todas las páginas relevantes al conectar nuevas cuentas bancarias.  
- **Transferencias de Fondos**: Permite a los usuarios enviar dinero a otras cuentas utilizando **Dwolla**, con validaciones y autenticación de destinatarios.  
- **Diseño Responsivo**: Interfaz optimizada para escritorio, tablet y dispositivos móviles.  

---

## 🚀 Instalación y Configuración

1. **Clonar el repositorio:**  
   `git clone https://github.com/Gonza-Butafuoco/Horizon.git`  

2. **Navegar al directorio del proyecto:**  
   `cd Horizon`  

3. **Instalar las dependencias:**  
   `npm install` o `yarn install`  

4. **Crear un archivo `.env.local`** con las siguientes variables de entorno necesarias:  

   - `NEXT_PUBLIC_APPWRITE_PROJECT_ID=tu_project_id`  
   - `NEXT_PUBLIC_APPWRITE_ENDPOINT=tu_endpoint`  
   - `NEXT_PUBLIC_PLAID_CLIENT_ID=tu_client_id`  
   - `NEXT_PUBLIC_PLAID_SECRET=tu_secret`  
   - `NEXT_PUBLIC_DWOLLA_KEY=tu_key`  
   - `NEXT_PUBLIC_DWOLLA_SECRET=tu_secret`  

5. **Iniciar el servidor de desarrollo:**  
   `npm run dev` o `yarn dev`  

6. **Abrir el navegador en:**  
   [http://localhost:3000](http://localhost:3000)  

---

## 🛠️ Contribuciones

Las contribuciones son bienvenidas. Para contribuir:  

1. Hacer un **fork** del proyecto.  
2. Crear una nueva rama con la funcionalidad:  
   `git checkout -b feature/nueva-funcionalidad`  
3. Realizar los cambios y hacer un commit:  
   `git commit -m "Agrega nueva funcionalidad"`  
4. Subir los cambios al repositorio remoto:  
   `git push origin feature/nueva-funcionalidad`  
5. Abrir un **Pull Request** para revisión.  

---

## 🌍 English Version

### **Horizon - Financial SaaS Platform**  

Horizon is a **financial SaaS platform** built with **Next.js** that allows users to connect multiple bank accounts, display transactions in real-time, transfer money to other platform users, and manage their finances efficiently.  



---

### ⚙️ **Tech Stack**

- **Next.js**: React framework for web applications.  
- **TypeScript**: Static typing for enhanced development security.  
- **Appwrite**: Backend-as-a-Service for authentication and database management.  
- **Plaid**: Bank integration for linking accounts.  
- **Dwolla**: Payment processing and money transfers.  
- **React Hook Form** & **Zod**: Form handling and data validation.  
- **TailwindCSS**: Responsive design framework.  
- **Chart.js**: Data visualization with interactive charts.  
- **ShadCN**: Custom and accessible UI components.  

---

### 🔋 **Features**

- **Secure Authentication**: SSR authentication with proper validation and authorization.  
- **Bank Connectivity**: Integration with **Plaid** to link multiple bank accounts.  
- **Dashboard**: Displays an overview of total balance across all connected banks, recent transactions, and spending breakdown by category.  
- **Bank Management**: Complete list of connected banks with respective balances and account details.  
- **Transaction History**: Includes pagination and filtering options for viewing transaction history across different banks.  
- **Real-time Updates**: Reflects changes across all relevant pages upon connecting new bank accounts.  
- **Funds Transfer**: Enables users to send money to other accounts using **Dwolla**, with recipient validation and authentication.  
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.  

---

### 🚀 **Installation & Setup**

1. **Clone the repository:**  
   `git clone https://github.com/Gonza-Butafuoco/Horizon.git`  

2. **Navigate to the project directory:**  
   `cd Horizon`  

3. **Install dependencies:**  
   `npm install` or `yarn install`  

4. **Create a `.env.local` file** with the required environment variables:  

   - `NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id`  
   - `NEXT_PUBLIC_APPWRITE_ENDPOINT=your_endpoint`  
   - `NEXT_PUBLIC_PLAID_CLIENT_ID=your_client_id`  
   - `NEXT_PUBLIC_PLAID_SECRET=your_secret`  
   - `NEXT_PUBLIC_DWOLLA_KEY=your_key`  
   - `NEXT_PUBLIC_DWOLLA_SECRET=your_secret`  

5. **Start the development server:**  
   `npm run dev` or `yarn dev`  

6. **Open in your browser:**  
   [http://localhost:3000](http://localhost:3000)  

---

### 🛠️ **Contributing**  

Contributions are welcome! To contribute:  

1. Fork the project.  
2. Create a new branch:  
   `git checkout -b feature/new-feature`  
3. Make your changes and commit:  
   `git commit -m "Add new feature"`  
4. Push the changes to the repository:  
   `git push origin feature/new-feature`  
5. Open a **Pull Request** for review.  

---


