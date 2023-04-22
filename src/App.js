import React, { useState } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';


function App() {
  const data = [ 
    {
      productImage:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAdVBMVEXMzMwAAADQ0NDPz8/U1NR1dXWJiYkWFhYsLCy7u7s6OjrHx8dmZmbW1tbCwsKOjo6wsLCnp6cyMjJxcXFeXl6jo6MnJydBQUGAgICenp68vLxYWFiEhISXl5cdHR2ysrINDQ1LS0siIiJycnISEhI/Pz9HR0fnMFLNAAAFGElEQVR4nO3Ya7OiOBAGYDppEOQmiIjiBT2X//8Tt8MlAdepndmZWj7s+1SdKg7GmHQ6F/A8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+N/QSin9WwX+zW/8fp1/jvLueRAc4kWDdHZ21+qcB/lOCv5avefMXceFVFHEtgqtsmsQzG6sinOiZ/kkqtjd1BmV07/qfiQyBXJ+W8EPqIL2Yw91vCeqtzXRxxhpnbVEYUjU/Iku/C7V0kfmaS8uLrMx4S0dxx7rHZV3U2BP+18IgkSR/LHG7EZXz1RxpXD48LzpDuZGYH9mRexTMbRCz0PQfLZfY+Ni2g7zlgM6/Xzq8uNYjjHgirLx6jzEkctumAV8oGbtIOiIrn9vg6Rxsd8O99WFonGlSB+fP91evlA2xSAmf/oe+0/zqwc6qOkGZW8r+O9wFb4Z2pj2aTLGgDft1AFd0G62cM6/+FqJTKBTGo4xyCifPldXiqXOtrbBnH24Ek2BaYFe7AlpW3s8xsAkim1j3PmuvZmf2mtuopd6NxWrKQbe0+XB3sRc6rEx4PKx7mSQkb3Lxn2+3zO2YVC5ZL+NwUlKTJ/IHLftlZGuXIbTYRFFriTlbQxMvg8fq4hk5dVnOrk6fVo3BtJdpRvZs4iOxbQPnM0mOMVAloPYFuekdnmgJAhDJkg3loul6gPn8sB73iJWWnFE39wvB5GLeEDrnpQ4CTOq88jLiofdyWqzAEwx4P3GpbzyN7MvqzET+IMOi6GUKF54lgdyPqioOkXXdvgNibzrtsRr3UWRq7JOtNn6tCzk/cSXQTUDb2OQ3Fz/FkkxZYLJgmU28/a776rLA5VeTa7RNe0/CMgVXiTFGrgluyKllWmZbIu7PhRvYxAsx0zdJQj7lyyQBZL606CLAe9CSk7RqaLOlF3GoJgtOGuQGNjdzmxnWk97+SwGs7nQdPHi+5IJ5WsWmMNF33e3Jl7Jj1nLepAl5jgic8EVl0X3vHIMOveP2bH4sR3bPa2JfudayMnzpblpQo90ecubjtRTDGR7zacyqS+ZPxwSRouArIGr+cmvTlKZ8CkbafIlF8ocaqLZ3rh9SXufgml3GOn2mPZVpGnpy4WWZfU5m06yLOo7FW5fWH1vbGYjEt8+UqLbZtDJVZcomSGuvTpMFu1lWQvS3fKBM6LPqQrq5O+qef4t/pYFKBtOZsONdrtuDGRBcj2UUysHk/xY58HFnHzcYX9xZvS8cUdQyyDEF1vH7SFV3DXf5jF4yLOY/nITiMlf+azskW1fn/VqIs8Laf+eh6tuKivDPv8qjzvCSxBsFRz6fRXclrMYmNVi9hwmy8G620J/vrkPw6B19z3rybQmejJ5m2HQ5KA7f4Gg7LnABOHNWNo18eCeTWXBMYkXUzvUqePPx9pp4HklFbL2yTE2nA71PRsDs91ftClx78LZzmief20K7d49/Nm9UVWUe2wyw/OHMMrhMDF3OCsXv7oOHT/o6Df+g8rFcU1OkLaHDdV7U2K7eOWoo9mzw8tj43Dzad+lNbRJmrxpqT9Ee/3E65JGbtyi9dPA06rYh+E2OSxf8uqTG1mOmq9nmBxeWqt/cG3vBfZhUmVBW9Zlktt3qCq7fNd1ddWrZ0FPzm/M/NqW+au19yX+0TyqfQ28eO3yegMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+J/4C3Ec1tOBZK2cAAAAASUVORK5CYII=",
      productName: "Fancy Product",
      price: "$40 - $80.00",
      rating: <div className='demo'></div>,
    },
    {
      productImage:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAdVBMVEXMzMwAAADQ0NDPz8/U1NR1dXWJiYkWFhYsLCy7u7s6OjrHx8dmZmbW1tbCwsKOjo6wsLCnp6cyMjJxcXFeXl6jo6MnJydBQUGAgICenp68vLxYWFiEhISXl5cdHR2ysrINDQ1LS0siIiJycnISEhI/Pz9HR0fnMFLNAAAFGElEQVR4nO3Ya7OiOBAGYDppEOQmiIjiBT2X//8Tt8MlAdepndmZWj7s+1SdKg7GmHQ6F/A8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+N/QSin9WwX+zW/8fp1/jvLueRAc4kWDdHZ21+qcB/lOCv5avefMXceFVFHEtgqtsmsQzG6sinOiZ/kkqtjd1BmV07/qfiQyBXJ+W8EPqIL2Yw91vCeqtzXRxxhpnbVEYUjU/Iku/C7V0kfmaS8uLrMx4S0dxx7rHZV3U2BP+18IgkSR/LHG7EZXz1RxpXD48LzpDuZGYH9mRexTMbRCz0PQfLZfY+Ni2g7zlgM6/Xzq8uNYjjHgirLx6jzEkctumAV8oGbtIOiIrn9vg6Rxsd8O99WFonGlSB+fP91evlA2xSAmf/oe+0/zqwc6qOkGZW8r+O9wFb4Z2pj2aTLGgDft1AFd0G62cM6/+FqJTKBTGo4xyCifPldXiqXOtrbBnH24Ek2BaYFe7AlpW3s8xsAkim1j3PmuvZmf2mtuopd6NxWrKQbe0+XB3sRc6rEx4PKx7mSQkb3Lxn2+3zO2YVC5ZL+NwUlKTJ/IHLftlZGuXIbTYRFFriTlbQxMvg8fq4hk5dVnOrk6fVo3BtJdpRvZs4iOxbQPnM0mOMVAloPYFuekdnmgJAhDJkg3loul6gPn8sB73iJWWnFE39wvB5GLeEDrnpQ4CTOq88jLiofdyWqzAEwx4P3GpbzyN7MvqzET+IMOi6GUKF54lgdyPqioOkXXdvgNibzrtsRr3UWRq7JOtNn6tCzk/cSXQTUDb2OQ3Fz/FkkxZYLJgmU28/a776rLA5VeTa7RNe0/CMgVXiTFGrgluyKllWmZbIu7PhRvYxAsx0zdJQj7lyyQBZL606CLAe9CSk7RqaLOlF3GoJgtOGuQGNjdzmxnWk97+SwGs7nQdPHi+5IJ5WsWmMNF33e3Jl7Jj1nLepAl5jgic8EVl0X3vHIMOveP2bH4sR3bPa2JfudayMnzpblpQo90ecubjtRTDGR7zacyqS+ZPxwSRouArIGr+cmvTlKZ8CkbafIlF8ocaqLZ3rh9SXufgml3GOn2mPZVpGnpy4WWZfU5m06yLOo7FW5fWH1vbGYjEt8+UqLbZtDJVZcomSGuvTpMFu1lWQvS3fKBM6LPqQrq5O+qef4t/pYFKBtOZsONdrtuDGRBcj2UUysHk/xY58HFnHzcYX9xZvS8cUdQyyDEF1vH7SFV3DXf5jF4yLOY/nITiMlf+azskW1fn/VqIs8Laf+eh6tuKivDPv8qjzvCSxBsFRz6fRXclrMYmNVi9hwmy8G620J/vrkPw6B19z3rybQmejJ5m2HQ5KA7f4Gg7LnABOHNWNo18eCeTWXBMYkXUzvUqePPx9pp4HklFbL2yTE2nA71PRsDs91ftClx78LZzmief20K7d49/Nm9UVWUe2wyw/OHMMrhMDF3OCsXv7oOHT/o6Df+g8rFcU1OkLaHDdV7U2K7eOWoo9mzw8tj43Dzad+lNbRJmrxpqT9Ee/3E65JGbtyi9dPA06rYh+E2OSxf8uqTG1mOmq9nmBxeWqt/cG3vBfZhUmVBW9Zlktt3qCq7fNd1ddWrZ0FPzm/M/NqW+au19yX+0TyqfQ28eO3yegMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+J/4C3Ec1tOBZK2cAAAAASUVORK5CYII=",
        productImage1:<div className="sale-value"><Badge bg="dark">sale</Badge></div>,
        productName: "Special Item",
      price: <del>"$20.00"</del>,price1:"$18.00",
      rating: <span className="fa fa-star checked"></span>,
      rating1: <span className="fa fa-star checked"></span>,
      rating2: <span className="fa fa-star checked"></span>,
      rating3: <span className="fa fa-star checked"></span>,
      rating4: <span className="fa fa-star checked"></span>,      
            
    },
    {
      productImage:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAdVBMVEXMzMwAAADQ0NDPz8/U1NR1dXWJiYkWFhYsLCy7u7s6OjrHx8dmZmbW1tbCwsKOjo6wsLCnp6cyMjJxcXFeXl6jo6MnJydBQUGAgICenp68vLxYWFiEhISXl5cdHR2ysrINDQ1LS0siIiJycnISEhI/Pz9HR0fnMFLNAAAFGElEQVR4nO3Ya7OiOBAGYDppEOQmiIjiBT2X//8Tt8MlAdepndmZWj7s+1SdKg7GmHQ6F/A8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+N/QSin9WwX+zW/8fp1/jvLueRAc4kWDdHZ21+qcB/lOCv5avefMXceFVFHEtgqtsmsQzG6sinOiZ/kkqtjd1BmV07/qfiQyBXJ+W8EPqIL2Yw91vCeqtzXRxxhpnbVEYUjU/Iku/C7V0kfmaS8uLrMx4S0dxx7rHZV3U2BP+18IgkSR/LHG7EZXz1RxpXD48LzpDuZGYH9mRexTMbRCz0PQfLZfY+Ni2g7zlgM6/Xzq8uNYjjHgirLx6jzEkctumAV8oGbtIOiIrn9vg6Rxsd8O99WFonGlSB+fP91evlA2xSAmf/oe+0/zqwc6qOkGZW8r+O9wFb4Z2pj2aTLGgDft1AFd0G62cM6/+FqJTKBTGo4xyCifPldXiqXOtrbBnH24Ek2BaYFe7AlpW3s8xsAkim1j3PmuvZmf2mtuopd6NxWrKQbe0+XB3sRc6rEx4PKx7mSQkb3Lxn2+3zO2YVC5ZL+NwUlKTJ/IHLftlZGuXIbTYRFFriTlbQxMvg8fq4hk5dVnOrk6fVo3BtJdpRvZs4iOxbQPnM0mOMVAloPYFuekdnmgJAhDJkg3loul6gPn8sB73iJWWnFE39wvB5GLeEDrnpQ4CTOq88jLiofdyWqzAEwx4P3GpbzyN7MvqzET+IMOi6GUKF54lgdyPqioOkXXdvgNibzrtsRr3UWRq7JOtNn6tCzk/cSXQTUDb2OQ3Fz/FkkxZYLJgmU28/a776rLA5VeTa7RNe0/CMgVXiTFGrgluyKllWmZbIu7PhRvYxAsx0zdJQj7lyyQBZL606CLAe9CSk7RqaLOlF3GoJgtOGuQGNjdzmxnWk97+SwGs7nQdPHi+5IJ5WsWmMNF33e3Jl7Jj1nLepAl5jgic8EVl0X3vHIMOveP2bH4sR3bPa2JfudayMnzpblpQo90ecubjtRTDGR7zacyqS+ZPxwSRouArIGr+cmvTlKZ8CkbafIlF8ocaqLZ3rh9SXufgml3GOn2mPZVpGnpy4WWZfU5m06yLOo7FW5fWH1vbGYjEt8+UqLbZtDJVZcomSGuvTpMFu1lWQvS3fKBM6LPqQrq5O+qef4t/pYFKBtOZsONdrtuDGRBcj2UUysHk/xY58HFnHzcYX9xZvS8cUdQyyDEF1vH7SFV3DXf5jF4yLOY/nITiMlf+azskW1fn/VqIs8Laf+eh6tuKivDPv8qjzvCSxBsFRz6fRXclrMYmNVi9hwmy8G620J/vrkPw6B19z3rybQmejJ5m2HQ5KA7f4Gg7LnABOHNWNo18eCeTWXBMYkXUzvUqePPx9pp4HklFbL2yTE2nA71PRsDs91ftClx78LZzmief20K7d49/Nm9UVWUe2wyw/OHMMrhMDF3OCsXv7oOHT/o6Df+g8rFcU1OkLaHDdV7U2K7eOWoo9mzw8tj43Dzad+lNbRJmrxpqT9Ee/3E65JGbtyi9dPA06rYh+E2OSxf8uqTG1mOmq9nmBxeWqt/cG3vBfZhUmVBW9Zlktt3qCq7fNd1ddWrZ0FPzm/M/NqW+au19yX+0TyqfQ28eO3yegMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+J/4C3Ec1tOBZK2cAAAAASUVORK5CYII=",
        productImage1:<div className="sale-value"><Badge bg="dark">sale</Badge></div>,
        productName: "Sale Item",
      price: <del>$50.00</del>,price1:"$25.00",
      rating: <div className='demo'></div>,
    },
    {
      productImage:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAdVBMVEXMzMwAAADQ0NDPz8/U1NR1dXWJiYkWFhYsLCy7u7s6OjrHx8dmZmbW1tbCwsKOjo6wsLCnp6cyMjJxcXFeXl6jo6MnJydBQUGAgICenp68vLxYWFiEhISXl5cdHR2ysrINDQ1LS0siIiJycnISEhI/Pz9HR0fnMFLNAAAFGElEQVR4nO3Ya7OiOBAGYDppEOQmiIjiBT2X//8Tt8MlAdepndmZWj7s+1SdKg7GmHQ6F/A8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+N/QSin9WwX+zW/8fp1/jvLueRAc4kWDdHZ21+qcB/lOCv5avefMXceFVFHEtgqtsmsQzG6sinOiZ/kkqtjd1BmV07/qfiQyBXJ+W8EPqIL2Yw91vCeqtzXRxxhpnbVEYUjU/Iku/C7V0kfmaS8uLrMx4S0dxx7rHZV3U2BP+18IgkSR/LHG7EZXz1RxpXD48LzpDuZGYH9mRexTMbRCz0PQfLZfY+Ni2g7zlgM6/Xzq8uNYjjHgirLx6jzEkctumAV8oGbtIOiIrn9vg6Rxsd8O99WFonGlSB+fP91evlA2xSAmf/oe+0/zqwc6qOkGZW8r+O9wFb4Z2pj2aTLGgDft1AFd0G62cM6/+FqJTKBTGo4xyCifPldXiqXOtrbBnH24Ek2BaYFe7AlpW3s8xsAkim1j3PmuvZmf2mtuopd6NxWrKQbe0+XB3sRc6rEx4PKx7mSQkb3Lxn2+3zO2YVC5ZL+NwUlKTJ/IHLftlZGuXIbTYRFFriTlbQxMvg8fq4hk5dVnOrk6fVo3BtJdpRvZs4iOxbQPnM0mOMVAloPYFuekdnmgJAhDJkg3loul6gPn8sB73iJWWnFE39wvB5GLeEDrnpQ4CTOq88jLiofdyWqzAEwx4P3GpbzyN7MvqzET+IMOi6GUKF54lgdyPqioOkXXdvgNibzrtsRr3UWRq7JOtNn6tCzk/cSXQTUDb2OQ3Fz/FkkxZYLJgmU28/a776rLA5VeTa7RNe0/CMgVXiTFGrgluyKllWmZbIu7PhRvYxAsx0zdJQj7lyyQBZL606CLAe9CSk7RqaLOlF3GoJgtOGuQGNjdzmxnWk97+SwGs7nQdPHi+5IJ5WsWmMNF33e3Jl7Jj1nLepAl5jgic8EVl0X3vHIMOveP2bH4sR3bPa2JfudayMnzpblpQo90ecubjtRTDGR7zacyqS+ZPxwSRouArIGr+cmvTlKZ8CkbafIlF8ocaqLZ3rh9SXufgml3GOn2mPZVpGnpy4WWZfU5m06yLOo7FW5fWH1vbGYjEt8+UqLbZtDJVZcomSGuvTpMFu1lWQvS3fKBM6LPqQrq5O+qef4t/pYFKBtOZsONdrtuDGRBcj2UUysHk/xY58HFnHzcYX9xZvS8cUdQyyDEF1vH7SFV3DXf5jF4yLOY/nITiMlf+azskW1fn/VqIs8Laf+eh6tuKivDPv8qjzvCSxBsFRz6fRXclrMYmNVi9hwmy8G620J/vrkPw6B19z3rybQmejJ5m2HQ5KA7f4Gg7LnABOHNWNo18eCeTWXBMYkXUzvUqePPx9pp4HklFbL2yTE2nA71PRsDs91ftClx78LZzmief20K7d49/Nm9UVWUe2wyw/OHMMrhMDF3OCsXv7oOHT/o6Df+g8rFcU1OkLaHDdV7U2K7eOWoo9mzw8tj43Dzad+lNbRJmrxpqT9Ee/3E65JGbtyi9dPA06rYh+E2OSxf8uqTG1mOmq9nmBxeWqt/cG3vBfZhUmVBW9Zlktt3qCq7fNd1ddWrZ0FPzm/M/NqW+au19yX+0TyqfQ28eO3yegMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+J/4C3Ec1tOBZK2cAAAAASUVORK5CYII=",
      productName: "Popular Item",
      price: "$40.00",
      rating: <span className="fa fa-star checked"></span>,
      rating1: <span className="fa fa-star checked"></span>,
      rating2: <span className="fa fa-star checked"></span>,
      rating3: <span className="fa fa-star checked"></span>,
      rating4: <span className="fa fa-star checked"></span>, 
    },
    {
      productImage:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAdVBMVEXMzMwAAADQ0NDPz8/U1NR1dXWJiYkWFhYsLCy7u7s6OjrHx8dmZmbW1tbCwsKOjo6wsLCnp6cyMjJxcXFeXl6jo6MnJydBQUGAgICenp68vLxYWFiEhISXl5cdHR2ysrINDQ1LS0siIiJycnISEhI/Pz9HR0fnMFLNAAAFGElEQVR4nO3Ya7OiOBAGYDppEOQmiIjiBT2X//8Tt8MlAdepndmZWj7s+1SdKg7GmHQ6F/A8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+N/QSin9WwX+zW/8fp1/jvLueRAc4kWDdHZ21+qcB/lOCv5avefMXceFVFHEtgqtsmsQzG6sinOiZ/kkqtjd1BmV07/qfiQyBXJ+W8EPqIL2Yw91vCeqtzXRxxhpnbVEYUjU/Iku/C7V0kfmaS8uLrMx4S0dxx7rHZV3U2BP+18IgkSR/LHG7EZXz1RxpXD48LzpDuZGYH9mRexTMbRCz0PQfLZfY+Ni2g7zlgM6/Xzq8uNYjjHgirLx6jzEkctumAV8oGbtIOiIrn9vg6Rxsd8O99WFonGlSB+fP91evlA2xSAmf/oe+0/zqwc6qOkGZW8r+O9wFb4Z2pj2aTLGgDft1AFd0G62cM6/+FqJTKBTGo4xyCifPldXiqXOtrbBnH24Ek2BaYFe7AlpW3s8xsAkim1j3PmuvZmf2mtuopd6NxWrKQbe0+XB3sRc6rEx4PKx7mSQkb3Lxn2+3zO2YVC5ZL+NwUlKTJ/IHLftlZGuXIbTYRFFriTlbQxMvg8fq4hk5dVnOrk6fVo3BtJdpRvZs4iOxbQPnM0mOMVAloPYFuekdnmgJAhDJkg3loul6gPn8sB73iJWWnFE39wvB5GLeEDrnpQ4CTOq88jLiofdyWqzAEwx4P3GpbzyN7MvqzET+IMOi6GUKF54lgdyPqioOkXXdvgNibzrtsRr3UWRq7JOtNn6tCzk/cSXQTUDb2OQ3Fz/FkkxZYLJgmU28/a776rLA5VeTa7RNe0/CMgVXiTFGrgluyKllWmZbIu7PhRvYxAsx0zdJQj7lyyQBZL606CLAe9CSk7RqaLOlF3GoJgtOGuQGNjdzmxnWk97+SwGs7nQdPHi+5IJ5WsWmMNF33e3Jl7Jj1nLepAl5jgic8EVl0X3vHIMOveP2bH4sR3bPa2JfudayMnzpblpQo90ecubjtRTDGR7zacyqS+ZPxwSRouArIGr+cmvTlKZ8CkbafIlF8ocaqLZ3rh9SXufgml3GOn2mPZVpGnpy4WWZfU5m06yLOo7FW5fWH1vbGYjEt8+UqLbZtDJVZcomSGuvTpMFu1lWQvS3fKBM6LPqQrq5O+qef4t/pYFKBtOZsONdrtuDGRBcj2UUysHk/xY58HFnHzcYX9xZvS8cUdQyyDEF1vH7SFV3DXf5jF4yLOY/nITiMlf+azskW1fn/VqIs8Laf+eh6tuKivDPv8qjzvCSxBsFRz6fRXclrMYmNVi9hwmy8G620J/vrkPw6B19z3rybQmejJ5m2HQ5KA7f4Gg7LnABOHNWNo18eCeTWXBMYkXUzvUqePPx9pp4HklFbL2yTE2nA71PRsDs91ftClx78LZzmief20K7d49/Nm9UVWUe2wyw/OHMMrhMDF3OCsXv7oOHT/o6Df+g8rFcU1OkLaHDdV7U2K7eOWoo9mzw8tj43Dzad+lNbRJmrxpqT9Ee/3E65JGbtyi9dPA06rYh+E2OSxf8uqTG1mOmq9nmBxeWqt/cG3vBfZhUmVBW9Zlktt3qCq7fNd1ddWrZ0FPzm/M/NqW+au19yX+0TyqfQ28eO3yegMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+J/4C3Ec1tOBZK2cAAAAASUVORK5CYII=",
        productImage1:<div className="sale-value"><Badge bg="dark">sale</Badge></div>,
        productName: "Special Item",
      price: <del>"$20.00"</del>,price1:"$18.00",
      rating: <span className="fa fa-star checked"></span>,
      rating1: <span className="fa fa-star checked"></span>,
      rating2: <span className="fa fa-star checked"></span>,
      rating3: <span className="fa fa-star checked"></span>,
      rating4: <span className="fa fa-star checked"></span>,      
            
    },
    {
      productImage:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAdVBMVEXMzMwAAADQ0NDPz8/U1NR1dXWJiYkWFhYsLCy7u7s6OjrHx8dmZmbW1tbCwsKOjo6wsLCnp6cyMjJxcXFeXl6jo6MnJydBQUGAgICenp68vLxYWFiEhISXl5cdHR2ysrINDQ1LS0siIiJycnISEhI/Pz9HR0fnMFLNAAAFGElEQVR4nO3Ya7OiOBAGYDppEOQmiIjiBT2X//8Tt8MlAdepndmZWj7s+1SdKg7GmHQ6F/A8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+N/QSin9WwX+zW/8fp1/jvLueRAc4kWDdHZ21+qcB/lOCv5avefMXceFVFHEtgqtsmsQzG6sinOiZ/kkqtjd1BmV07/qfiQyBXJ+W8EPqIL2Yw91vCeqtzXRxxhpnbVEYUjU/Iku/C7V0kfmaS8uLrMx4S0dxx7rHZV3U2BP+18IgkSR/LHG7EZXz1RxpXD48LzpDuZGYH9mRexTMbRCz0PQfLZfY+Ni2g7zlgM6/Xzq8uNYjjHgirLx6jzEkctumAV8oGbtIOiIrn9vg6Rxsd8O99WFonGlSB+fP91evlA2xSAmf/oe+0/zqwc6qOkGZW8r+O9wFb4Z2pj2aTLGgDft1AFd0G62cM6/+FqJTKBTGo4xyCifPldXiqXOtrbBnH24Ek2BaYFe7AlpW3s8xsAkim1j3PmuvZmf2mtuopd6NxWrKQbe0+XB3sRc6rEx4PKx7mSQkb3Lxn2+3zO2YVC5ZL+NwUlKTJ/IHLftlZGuXIbTYRFFriTlbQxMvg8fq4hk5dVnOrk6fVo3BtJdpRvZs4iOxbQPnM0mOMVAloPYFuekdnmgJAhDJkg3loul6gPn8sB73iJWWnFE39wvB5GLeEDrnpQ4CTOq88jLiofdyWqzAEwx4P3GpbzyN7MvqzET+IMOi6GUKF54lgdyPqioOkXXdvgNibzrtsRr3UWRq7JOtNn6tCzk/cSXQTUDb2OQ3Fz/FkkxZYLJgmU28/a776rLA5VeTa7RNe0/CMgVXiTFGrgluyKllWmZbIu7PhRvYxAsx0zdJQj7lyyQBZL606CLAe9CSk7RqaLOlF3GoJgtOGuQGNjdzmxnWk97+SwGs7nQdPHi+5IJ5WsWmMNF33e3Jl7Jj1nLepAl5jgic8EVl0X3vHIMOveP2bH4sR3bPa2JfudayMnzpblpQo90ecubjtRTDGR7zacyqS+ZPxwSRouArIGr+cmvTlKZ8CkbafIlF8ocaqLZ3rh9SXufgml3GOn2mPZVpGnpy4WWZfU5m06yLOo7FW5fWH1vbGYjEt8+UqLbZtDJVZcomSGuvTpMFu1lWQvS3fKBM6LPqQrq5O+qef4t/pYFKBtOZsONdrtuDGRBcj2UUysHk/xY58HFnHzcYX9xZvS8cUdQyyDEF1vH7SFV3DXf5jF4yLOY/nITiMlf+azskW1fn/VqIs8Laf+eh6tuKivDPv8qjzvCSxBsFRz6fRXclrMYmNVi9hwmy8G620J/vrkPw6B19z3rybQmejJ5m2HQ5KA7f4Gg7LnABOHNWNo18eCeTWXBMYkXUzvUqePPx9pp4HklFbL2yTE2nA71PRsDs91ftClx78LZzmief20K7d49/Nm9UVWUe2wyw/OHMMrhMDF3OCsXv7oOHT/o6Df+g8rFcU1OkLaHDdV7U2K7eOWoo9mzw8tj43Dzad+lNbRJmrxpqT9Ee/3E65JGbtyi9dPA06rYh+E2OSxf8uqTG1mOmq9nmBxeWqt/cG3vBfZhUmVBW9Zlktt3qCq7fNd1ddWrZ0FPzm/M/NqW+au19yX+0TyqfQ28eO3yegMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+J/4C3Ec1tOBZK2cAAAAASUVORK5CYII=",
      productName: "Fancy Product",
      price: "$40 - $80.00",
      rating: <div className='demo'></div>,
    },
    {
      productImage:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAdVBMVEXMzMwAAADQ0NDPz8/U1NR1dXWJiYkWFhYsLCy7u7s6OjrHx8dmZmbW1tbCwsKOjo6wsLCnp6cyMjJxcXFeXl6jo6MnJydBQUGAgICenp68vLxYWFiEhISXl5cdHR2ysrINDQ1LS0siIiJycnISEhI/Pz9HR0fnMFLNAAAFGElEQVR4nO3Ya7OiOBAGYDppEOQmiIjiBT2X//8Tt8MlAdepndmZWj7s+1SdKg7GmHQ6F/A8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+N/QSin9WwX+zW/8fp1/jvLueRAc4kWDdHZ21+qcB/lOCv5avefMXceFVFHEtgqtsmsQzG6sinOiZ/kkqtjd1BmV07/qfiQyBXJ+W8EPqIL2Yw91vCeqtzXRxxhpnbVEYUjU/Iku/C7V0kfmaS8uLrMx4S0dxx7rHZV3U2BP+18IgkSR/LHG7EZXz1RxpXD48LzpDuZGYH9mRexTMbRCz0PQfLZfY+Ni2g7zlgM6/Xzq8uNYjjHgirLx6jzEkctumAV8oGbtIOiIrn9vg6Rxsd8O99WFonGlSB+fP91evlA2xSAmf/oe+0/zqwc6qOkGZW8r+O9wFb4Z2pj2aTLGgDft1AFd0G62cM6/+FqJTKBTGo4xyCifPldXiqXOtrbBnH24Ek2BaYFe7AlpW3s8xsAkim1j3PmuvZmf2mtuopd6NxWrKQbe0+XB3sRc6rEx4PKx7mSQkb3Lxn2+3zO2YVC5ZL+NwUlKTJ/IHLftlZGuXIbTYRFFriTlbQxMvg8fq4hk5dVnOrk6fVo3BtJdpRvZs4iOxbQPnM0mOMVAloPYFuekdnmgJAhDJkg3loul6gPn8sB73iJWWnFE39wvB5GLeEDrnpQ4CTOq88jLiofdyWqzAEwx4P3GpbzyN7MvqzET+IMOi6GUKF54lgdyPqioOkXXdvgNibzrtsRr3UWRq7JOtNn6tCzk/cSXQTUDb2OQ3Fz/FkkxZYLJgmU28/a776rLA5VeTa7RNe0/CMgVXiTFGrgluyKllWmZbIu7PhRvYxAsx0zdJQj7lyyQBZL606CLAe9CSk7RqaLOlF3GoJgtOGuQGNjdzmxnWk97+SwGs7nQdPHi+5IJ5WsWmMNF33e3Jl7Jj1nLepAl5jgic8EVl0X3vHIMOveP2bH4sR3bPa2JfudayMnzpblpQo90ecubjtRTDGR7zacyqS+ZPxwSRouArIGr+cmvTlKZ8CkbafIlF8ocaqLZ3rh9SXufgml3GOn2mPZVpGnpy4WWZfU5m06yLOo7FW5fWH1vbGYjEt8+UqLbZtDJVZcomSGuvTpMFu1lWQvS3fKBM6LPqQrq5O+qef4t/pYFKBtOZsONdrtuDGRBcj2UUysHk/xY58HFnHzcYX9xZvS8cUdQyyDEF1vH7SFV3DXf5jF4yLOY/nITiMlf+azskW1fn/VqIs8Laf+eh6tuKivDPv8qjzvCSxBsFRz6fRXclrMYmNVi9hwmy8G620J/vrkPw6B19z3rybQmejJ5m2HQ5KA7f4Gg7LnABOHNWNo18eCeTWXBMYkXUzvUqePPx9pp4HklFbL2yTE2nA71PRsDs91ftClx78LZzmief20K7d49/Nm9UVWUe2wyw/OHMMrhMDF3OCsXv7oOHT/o6Df+g8rFcU1OkLaHDdV7U2K7eOWoo9mzw8tj43Dzad+lNbRJmrxpqT9Ee/3E65JGbtyi9dPA06rYh+E2OSxf8uqTG1mOmq9nmBxeWqt/cG3vBfZhUmVBW9Zlktt3qCq7fNd1ddWrZ0FPzm/M/NqW+au19yX+0TyqfQ28eO3yegMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+J/4C3Ec1tOBZK2cAAAAASUVORK5CYII=",
        productImage1:<div className="sale-value"><Badge bg="dark">sale</Badge></div>,
        productName: "Special Item",
      price: <del>"$20.00"</del>,price1:"$18.00",
      rating: <span className="fa fa-star checked"></span>,
      rating1: <span className="fa fa-star checked"></span>,
      rating2: <span className="fa fa-star checked"></span>,
      rating3: <span className="fa fa-star checked"></span>,
      rating4: <span className="fa fa-star checked"></span>,      
            
    },
    {
      productImage:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAdVBMVEXMzMwAAADQ0NDPz8/U1NR1dXWJiYkWFhYsLCy7u7s6OjrHx8dmZmbW1tbCwsKOjo6wsLCnp6cyMjJxcXFeXl6jo6MnJydBQUGAgICenp68vLxYWFiEhISXl5cdHR2ysrINDQ1LS0siIiJycnISEhI/Pz9HR0fnMFLNAAAFGElEQVR4nO3Ya7OiOBAGYDppEOQmiIjiBT2X//8Tt8MlAdepndmZWj7s+1SdKg7GmHQ6F/A8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+N/QSin9WwX+zW/8fp1/jvLueRAc4kWDdHZ21+qcB/lOCv5avefMXceFVFHEtgqtsmsQzG6sinOiZ/kkqtjd1BmV07/qfiQyBXJ+W8EPqIL2Yw91vCeqtzXRxxhpnbVEYUjU/Iku/C7V0kfmaS8uLrMx4S0dxx7rHZV3U2BP+18IgkSR/LHG7EZXz1RxpXD48LzpDuZGYH9mRexTMbRCz0PQfLZfY+Ni2g7zlgM6/Xzq8uNYjjHgirLx6jzEkctumAV8oGbtIOiIrn9vg6Rxsd8O99WFonGlSB+fP91evlA2xSAmf/oe+0/zqwc6qOkGZW8r+O9wFb4Z2pj2aTLGgDft1AFd0G62cM6/+FqJTKBTGo4xyCifPldXiqXOtrbBnH24Ek2BaYFe7AlpW3s8xsAkim1j3PmuvZmf2mtuopd6NxWrKQbe0+XB3sRc6rEx4PKx7mSQkb3Lxn2+3zO2YVC5ZL+NwUlKTJ/IHLftlZGuXIbTYRFFriTlbQxMvg8fq4hk5dVnOrk6fVo3BtJdpRvZs4iOxbQPnM0mOMVAloPYFuekdnmgJAhDJkg3loul6gPn8sB73iJWWnFE39wvB5GLeEDrnpQ4CTOq88jLiofdyWqzAEwx4P3GpbzyN7MvqzET+IMOi6GUKF54lgdyPqioOkXXdvgNibzrtsRr3UWRq7JOtNn6tCzk/cSXQTUDb2OQ3Fz/FkkxZYLJgmU28/a776rLA5VeTa7RNe0/CMgVXiTFGrgluyKllWmZbIu7PhRvYxAsx0zdJQj7lyyQBZL606CLAe9CSk7RqaLOlF3GoJgtOGuQGNjdzmxnWk97+SwGs7nQdPHi+5IJ5WsWmMNF33e3Jl7Jj1nLepAl5jgic8EVl0X3vHIMOveP2bH4sR3bPa2JfudayMnzpblpQo90ecubjtRTDGR7zacyqS+ZPxwSRouArIGr+cmvTlKZ8CkbafIlF8ocaqLZ3rh9SXufgml3GOn2mPZVpGnpy4WWZfU5m06yLOo7FW5fWH1vbGYjEt8+UqLbZtDJVZcomSGuvTpMFu1lWQvS3fKBM6LPqQrq5O+qef4t/pYFKBtOZsONdrtuDGRBcj2UUysHk/xY58HFnHzcYX9xZvS8cUdQyyDEF1vH7SFV3DXf5jF4yLOY/nITiMlf+azskW1fn/VqIs8Laf+eh6tuKivDPv8qjzvCSxBsFRz6fRXclrMYmNVi9hwmy8G620J/vrkPw6B19z3rybQmejJ5m2HQ5KA7f4Gg7LnABOHNWNo18eCeTWXBMYkXUzvUqePPx9pp4HklFbL2yTE2nA71PRsDs91ftClx78LZzmief20K7d49/Nm9UVWUe2wyw/OHMMrhMDF3OCsXv7oOHT/o6Df+g8rFcU1OkLaHDdV7U2K7eOWoo9mzw8tj43Dzad+lNbRJmrxpqT9Ee/3E65JGbtyi9dPA06rYh+E2OSxf8uqTG1mOmq9nmBxeWqt/cG3vBfZhUmVBW9Zlktt3qCq7fNd1ddWrZ0FPzm/M/NqW+au19yX+0TyqfQ28eO3yegMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+J/4C3Ec1tOBZK2cAAAAASUVORK5CYII=",
      productName: "Popular Item",
      price: "$40.00",
      rating: <span className="fa fa-star checked"></span>,
      rating1: <span className="fa fa-star checked"></span>,
      rating2: <span className="fa fa-star checked"></span>,
      rating3: <span className="fa fa-star checked"></span>,
      rating4: <span className="fa fa-star checked"></span>, 
    },
  ];
  const [count,setcount] = useState(0)
  // data.map((value, index, accArr) => console.log(value, index, accArr))
  return (
    <div className="App"> 
    <div className="cart-value">
      <Badge bg="success">
        Cart {count}
      </Badge>
    </div>
      <div className="card-container">
      {data.map((product,idx)=>(
          <Product
          key={idx}
          prod={product}   
          count={count}
          setcount={setcount}
          />
      ))}
        </div>
        </div>
    )      
}

export default App;

// create a new component

function Product({prod,count,setcount}){
  
  const [show,setshow] = useState(false)

  function addtocart(){
    setcount(count+1);
    setshow(!show)
  }
  function removecart(){
    setcount(count-1);
    setshow(!show)
  }

  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.productImage}/>
      <div className='container'>
      <Card.Body>
        <Card.Title><b>{prod.productName}</b></Card.Title>
        
        <Card.Text> {prod.rating} {prod.rating1} {prod.rating2} {prod.rating3} {prod.rating4} </Card.Text>

        <Card.Text> {prod.price} {prod.price1} </Card.Text>
        <Card.Text> {prod.productImage1} </Card.Text>
        {!show ?
        <Button variant="outline-dark" 
        onClick={addtocart}>
          Add to cart </Button>
        :

        <Button variant="outline-dark"
        onClick={removecart}>
          Remove cart</Button>
        }
      </Card.Body>
      </div>
    </Card> 
    </div>
    
  );
}