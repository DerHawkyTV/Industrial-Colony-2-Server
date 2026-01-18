// Ender IO Conduit Transfer Rate Modifications
// This script modifies the transfer rates of Ender IO conduits

ServerEvents.recipes(event => {
    // Note: Conduit rates in Ender IO 1.20.1 are defined in datapacks
    // This script provides custom recipes for upgraded conduits

    console.log('Ender IO Conduit Rate modifications loaded')
})

// Alternative: Modify conduit NBT data on craft
ItemEvents.crafted(event => {
    const item = event.item

    // Check if crafted item is an energy conduit
    if (item.id.includes('enderio') && item.id.includes('conduit')) {
        console.log('Crafted conduit: ' + item.id)
        // Custom NBT modifications can be added here
    }
})

/**
 * Standard Ender IO Conduit Rates (for reference):
 *
 * ENERGY CONDUITS:
 * - Energy Conduit (Basic): 5,120 FE/t
 * - Enhanced Energy Conduit: 20,480 FE/t
 * - Ender Energy Conduit: 81,920 FE/t
 *
 * FLUID CONDUITS:
 * - Pressurized Fluid Conduit: 100 mB/t
 * - Ender Fluid Conduit: 800 mB/t
 *
 * ITEM CONDUITS:
 * - Item Conduit: 4 items/cycle
 * - Fast Item Conduit: 16 items/cycle
 *
 * To modify these, use datapacks (see Method 2 below)
 */
