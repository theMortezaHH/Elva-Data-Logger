# IoT Data Logger Project

## Overview

The IoT Data Logger is an advanced and versatile system designed to collect, store, and manage data from multiple sensors and provide control over connected devices. The project includes a distributed network of sensor and output nodes that communicate wirelessly with a central hub called the "Master," powered by a Raspberry Pi. The system supports user and node management through a feature-rich, user-friendly, responsive, and single-page web application.

## Features

### Data Collection and Logging

-   **Sensor Nodes**: Collect data such as temperature, humidity, light level, and more.
-   **Master Device**: Central hub powered by Raspberry Pi for storing data and managing nodes.
-   **Data Visualization**: Interactive charts and graphs to display historical and real-time data.

### User Management

-   **RFID-Based Access Control**: Output nodes with RFID modules for secure access.
-   **Permissions**: Admin users can manage permissions for RFID key cards.
-   **Activity Logging**: Detailed logs of all operations performed by users.

### Node Management

-   **Categorization**: Nodes can be categorized and named for easier management.
-   **Enable/Disable Nodes**: Admin can enable or disable specific nodes.
-   **History Management**: Admin can clear history for a specific node or request data for a specific time frame.
-   **Data Export**: Export data as a CSV file for further analysis.
-   **Actions**: Perform tasks such as opening doors, adjusting lighting, and more.

## Tech Stack

### Frontend

-   **Framework**: [Vue.js](https://vuejs.org/)
-   **UI Library**: [PrimeVue](https://primefaces.org/primevue)
-   **State Management**: [Pinia](https://pinia.vuejs.org/)
-   **Real-Time Communication**: WebSocket
-   **Charts**: [Chart.js](https://www.chartjs.org/)
-   **Styling**: Sass and Tailwind CSS
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Internationalization**: i18n for multi-language support

### Backend

-   **Framework**: [Nest.js](https://nestjs.com/)

## Directory Structure

-   **Client**: Contains the frontend codebase.
    -   Install dependencies and run development server:
        ```bash
        pnpm install
        pnpm dev
        ```
-   **Server**: Contains the backend codebase.
    -   Install dependencies and run development server:
        ```bash
        pnpm install
        pnpm dev
        ```

## Key Features of the Web Application

-   **User-Friendly Interface**: Designed with a focus on usability and customization.
-   **Responsive Design**: Optimized for both desktop and mobile devices.
-   **Real-Time Updates**: Live updates powered by WebSocket for seamless user experience.
-   **Customizable Themes**: Flexible appearance options using Sass and Tailwind CSS.
-   **Powerful Visualization**: Intuitive charts for easy data analysis.

## Getting Started

### Prerequisites

-   Node.js (v16 or higher recommended)
-   pnpm package manager
-   Raspberry Pi with required configurations

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

### Running the Application

-   Navigate to the respective directories (`Client` or `Server`) and use the following commands:
    -   Install dependencies:
        ```bash
        pnpm install
        ```
    -   Run development server:
        ```bash
        pnpm dev
        ```

<!-- ## Contribution Guidelines

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch:
    ```bash
    git checkout -b feature/your-feature
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add your message here"
    ```
4. Push to the branch:
    ```bash
    git push origin feature/your-feature
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details. -->

---

### Contact

For any inquiries or suggestions, feel free to reach out to the developer:

-   **Name**: Seyed Morteza Hadi Hosseini
-   **GitHub**: https://github.com/theMortezaHH
-   **Email**: mortezahh2022@gmail.com
