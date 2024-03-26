
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Advertiser() {
  return (
    <Card className="mx-auto max-w-sm mb-10">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">General info</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Company name</Label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Company Address</Label>
            <Input id="password" required type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Country</Label>
            <Input id="password" required type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Link to site</Label>
            <Input id="password" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

