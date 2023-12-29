# Map zoom function
# Zoom parameter
- Range float

# Buffer (Calculated field)
- buffer(makepoint([Lat],[Long]), [Zoom],'miles')

# Step 
1. Dual axis
2. Drag the Buffer to the detail to the first mark, set the color opacity to 0%, and set border as none
3. Drag the other relevant field to the second mark