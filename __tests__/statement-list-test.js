module.exports = test => {
  test(
    `
    // Strings
    "hello";
    
    
    // Numbers
    49;
    `,
    {
      type: 'Program',
      body: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'StringLiteral',
            value: 'hello',
          },
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'NumericLiteral',
            value: 49,
          },
        },
      ],
    }
  );
};
