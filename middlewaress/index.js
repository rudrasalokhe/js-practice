const express = require("express");
const app = express();

let requestCount = 0;
function requestCounterMiddleware(req, res, next) {
    requestCount++;
    console.log(`Total number of requests: ${requestCount}`);
    if (req.headers.cookie === "google") {
        next(); // Proceed to the next handler
    } else {
        res.json({
            message: "Request ended early due to invalid cookie",
        });
    }
}

// Route handlers
function sumHandler(req, res) {
    const a = parseInt(req.params.a, 10);
    const b = parseInt(req.params.b, 10);
    res.json({
        answer: a + b,
    });
}

function subtractHandler(req, res) {
    const a = parseInt(req.params.a, 10);
    const b = parseInt(req.params.b, 10);
    res.json({
        answer: a - b,
    });
}

function multiplyHandler(req, res) {
    const a = parseInt(req.params.a, 10);
    const b = parseInt(req.params.b, 10);
    res.json({
        answer: a * b,
    });
}

function divideHandler(req, res) {
    const a = parseInt(req.params.a, 10);
    const b = parseInt(req.params.b, 10);
    if (b === 0) {
        res.json({
            message: "Division by zero is not allowed",
        });
    } else {
        res.json({
            answer: a / b,
        });
    }
}

app.get("/sum/:a/:b", requestCounterMiddleware, sumHandler);
app.get("/sub/:a/:b", requestCounterMiddleware, subtractHandler);
app.get("/mul/:a/:b", requestCounterMiddleware, multiplyHandler);
app.get("/div/:a/:b", requestCounterMiddleware, divideHandler);

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
