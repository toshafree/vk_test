# 12. API фронта 2.0

### 12.1.3. Подписка на список доступных портфелей

При добавлении/удалении портфеля/доступа к портфелю будут высланы обновления

В любой момент может быть выслан снапшот

При отзыве доступа к портфелю, если вы подписаны на этот портфель, вы получите сообщение об отписке

#### Subscription request {#12.1.3}
Payload:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

Example:

```JSON
{
	"type": "available_portfolio_list.subscribe", 
    "data": {},
	"eid": "qwerty"
}
```

$\sqrt{3x-1}+(1+x)^2$

$$
\iint xy^2\,dx\,dy = \frac{1}{6}x^2y^3
$$

sss

