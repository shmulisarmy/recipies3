function MealPlanner() {
    return html`
        <div id="mealPlanner">
            <h1>Meal Planner</h1>
            <table>
                <thead>
                    <tr>
                        <th>Food</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    /${Object.entries(mealPlanner).map(([foodName, amount]) => amount? html`
                    <tr>
                        <td>${foodName}</td>
                        <td>${amount}</td>
                    </tr>
                `: "").join("")}
                </tbody>
            </table>
        </div>
    `;
}

