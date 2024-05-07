### Overview   
The Auto Top-up component is a React-based user interface designed to enable users to set up automatic credit purchases when their account balance falls below a specified threshold. This document outlines how to integrate and use the Auto Top-up component within your React application.

### Installation

1. Install Dependencies:

    npm install

2. Run it locally

    npm start

### Usage      

Once integrated, the Auto Top-up component will display a switch to toggle auto top-up settings and a slider to adjust the credit value and amount for auto-purchase.

Switch: Toggle the switch to enable or disable auto top-up settings.
Slider: Adjust the slider to set the desired credit amount for auto-purchase. The slider snaps to predefined credit values.

State Management: The component manages its state internally using React's useState hook. It exposes a context API for managing auto top-up settings.

### Customization

1.Theme: We can customize the appearance by modifying the theme configuration in the theme.ts file.

2.Styling: Styles for the component are defined using Material-UI. We can also adjust the styles of Switch and Slider used in the repo by modifying the styling files (CustomSwitch.ts, CustomSlider.ts).

### Component structure

1.Context Provider and Theme provider Setup: The application is wrapped with the AutoTopUpSettingProvider context provider and Material UI's Theme Provider in index.tsx

2.AutoTopUpSettings.tsx component contains Switch and Credit Slider and 'Confirm' Button.

3.AutTopUpSwitch.tsx component contains Switch ,which displays the CreditSlider.tsx when 'ON' and hide it when off.

4.CreditSlider.tsx Component contains the credit slider snaps to the predefined credit values and contains a 'Confirm auto purchase button' to console credit amount when clicked.
