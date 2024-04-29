import { Text, Button , Card } from '@shopify/polaris';
import { ExportIcon } from '@shopify/polaris-icons'; 


const walo = () => {
    return (
        <div style={{ 'display': 'flex', "justify-center" : "center" , "place-items" : "center", "flex-direction" : "column" }} >
            <Text variant="heading2xl" as="h2">
                This is a headline
            </Text>
            <Button  variant="primary" >Save theme</Button>
            <h3>works bro</h3>
            <Card>
                <h1>yeah brohter why should I care</h1>
            </Card>

            <Button
                onClick={() => alert("you just hit upload")}
                accessibilityLabel="Export variants"
                icon={ExportIcon}
            />
        </div>
    )
}
export default walo