## 1. Почему на этапе разработки используется локальная EVM, а не рабочая?

Для того, чтобы была возможность удобнее дебажить код контрактов.

## 2. Как передать eth при вызовах call и delegatecall?

```
addr.call{value: msg.value(or some custom eth)}(
    abi.encodeWithSignature("...", some args...)
);
```